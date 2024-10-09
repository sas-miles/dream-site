"use client";

import type * as THREE from "three";

import { Environment, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";

import Terrain from "./Terrain";
import { Drone } from "./Drone";

import { PerspectiveCamera } from "@theatre/r3f";

import { getProject } from "@theatre/core";
import type { ISheet, IProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider } from "@theatre/r3f";
import myProjectState from "src/store/Hadron.theatre-project-state.json";

import { Leva } from "leva";
import IntroSequence from "./IntroSequence";
// import ScrollHandler from "./ScrollHandler";

export const isProd = process.env.NEXT_PUBLIC_ENABLE_THEATRE_STUDIO === "false";
if (!isProd) {
  studio.initialize();
  studio.extend(extension);
}
const project = getProject(
  "hadronTheatre",
  isProd
    ? {
        state: myProjectState,
      }
    : undefined,
);
const mainSheet = project.sheet("Main");

const transitions: Record<string, [number, number]> = {
  Intro: [0, 2],
  Home: [2, 4],
  Experience: [5, 8],
};

export default function Scene() {
  const [currentScreen, setCurrentScreen] = useState("Intro");
  const [targetScreen, setTargetScreen] = useState("Home");
  const isSetup = useRef(false);

  useEffect(() => {
    project.ready.then(() => {
      if (currentScreen === targetScreen) {
        return;
      }

      if (isSetup.current && currentScreen === "Intro") {
        return;
      }
      isSetup.current = true;
      const reverse = targetScreen === "Home" && currentScreen !== "Intro";
      const transition = transitions[reverse ? currentScreen : targetScreen];
      if (!transition) {
        return;
      }

      mainSheet.sequence
        .play({
          range: transition,
        })
        .then(() => {
          setCurrentScreen(targetScreen);
        });
    });
  }, [targetScreen]);

  const cameraTargetRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <div className="fixed z-0 h-screen w-screen">
        <Leva hidden={true} />
        <Canvas camera={{ position: [5, 5, 10], fov: 30, near: 1 }}>
          <Suspense fallback={null}>
            <Environment preset="night" environmentIntensity={2.5} />
            <SheetProvider sheet={mainSheet}>
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
                <IntroSequence onScreenChange={setTargetScreen} />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
