"use client";

import type * as THREE from "three";

import { Environment, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";

import Terrain from "./Terrain";
import { Drone } from "./Drone";

import { getProject } from "@theatre/core";
import { PerspectiveCamera } from "@theatre/r3f";
import { useAnimationStore } from "~/store/animationStore";

import { useTheatre } from "~/hooks/useTheatre";
import { editable as e, SheetProvider } from "@theatre/r3f";
import hadronTheatre from "~/store/Hadron.theatre-project-state.json";

import { Leva } from "leva";
import IntroSequence from "./IntroSequence";
import ScrollHandler from "./ScrollHandler";

const transitions: Record<string, [number, number]> = {
  Intro: [0, 4],
  Home: [0, 4],
  Experience: [5, 8],
};

export default function Scene() {
  const [, setIsExiting] = useState(false);

  useTheatre();
  const projectRef = useRef(getProject("Hadron", { state: hadronTheatre }));
  const sheetRef = useRef(projectRef.current.sheet("Main"));

  const {
    setCurrentScreen,
    setIsAnimating,
    introSequenceReady,
    isAnimating,
    setIntroSequenceReady,
  } = useAnimationStore();

  useEffect(() => {
    projectRef.current.ready
      .then(() => {
        const transition = transitions.Intro;
        if (!transition) return;
        setIntroSequenceReady(false);
        setIsAnimating(true);

        sheetRef.current.sequence
          .play({
            range: transition,
            direction: "normal",
            rate: 1,
          })
          .then(() => {
            setCurrentScreen("Home");
            setIsAnimating(false);
            setIntroSequenceReady(true);
            console.log("Intro sequence ready:", true);
          })
          .catch((error) => {
            console.error("Error playing sequence:", error);
            setIsAnimating(false);
            setIntroSequenceReady(true);
            console.log("Intro sequence ready:", true);
          });
      })
      .catch((error) => {
        console.error("Error in project ready:", error);
        setIntroSequenceReady(true);
        console.log("Intro sequence ready:", true);
      });
  }, [setCurrentScreen, setIsAnimating, setIntroSequenceReady]);

  const triggerExperienceTransition = () => {
    const transition = transitions.Experience;
    if (!transition) return;

    setIsAnimating(true);

    sheetRef.current.sequence
      .play({
        range: transition,
        direction: "normal",
        rate: 1,
      })
      .then(() => {
        setCurrentScreen("Experience");
        setIsAnimating(false);
        console.log("Experience transition complete");
      })
      .catch((error) => {
        console.error("Error playing Experience transition:", error);
        setIsAnimating(false);
      });
  };

  const cameraTargetRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <div className="fixed z-0 h-screen w-screen">
        <Leva hidden={true} />
        <Canvas camera={{ position: [5, 5, 10], fov: 30, near: 1 }}>
          <Suspense fallback={null}>
            <Environment preset="night" environmentIntensity={2.5} />
            <SheetProvider sheet={sheetRef.current}>
              <PerspectiveCamera
                position={[0, 0, 3]}
                makeDefault
                theatreKey="Camera"
                lookAt={cameraTargetRef}
              />
              <e.mesh
                theatreKey="Camera Target"
                visible="editor"
                ref={cameraTargetRef}
              >
                <octahedronGeometry args={[0.1, 0]} />
                <meshPhongMaterial color={"yellow"} />
              </e.mesh>
              <e.group theatreKey="Drone">
                <Drone />
              </e.group>
              <e.group theatreKey="Terrain">
                <Terrain />
              </e.group>
            </SheetProvider>

            <ScrollControls pages={3}>
              <Scroll html>
                {introSequenceReady && !isAnimating ? <IntroSequence /> : null}
              </Scroll>
              <ScrollHandler
                onExperienceTransition={triggerExperienceTransition}
                setIsExiting={setIsExiting}
              />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
