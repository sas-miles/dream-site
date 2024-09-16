"use client";

import * as THREE from "three";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";

import Terrain from "./Terrain";
import { Drone } from "./Drone";

import { initializeTheatre } from "~/lib/theatreSetup";

import { getProject } from "@theatre/core";
import { PerspectiveCamera } from "@theatre/r3f";
import { useAnimationStore } from "~/store/animationStore";

import { editable as e, SheetProvider } from "@theatre/r3f";
import hadronTheatre from "~/store/Hadron.theatre-project-state.json";

import { Leva } from "leva";
const transitions: Record<string, [number, number]> = {
  Intro: [0, 0],
  Home: [0, 4],
  Experience: [5, 8],
  // Add other screen transitions as needed
};

export default function Scene() {
  initializeTheatre();
  const projectRef = useRef(getProject("Hadron", { state: hadronTheatre }));
  const sheetRef = useRef(projectRef.current.sheet("Main"));

  const {
    currentScreen,
    targetScreen,
    setCurrentScreen,
    direction,
    isAnimating,
    setIsAnimating,
  } = useAnimationStore();

  useEffect(() => {
    projectRef.current.ready
      .then(() => {
        if (currentScreen === targetScreen || isAnimating) return;

        const reverse = direction === "reverse";

        const transition = transitions[reverse ? currentScreen : targetScreen];
        if (!transition) return;

        setIsAnimating(true);

        sheetRef.current.sequence
          .play({
            range: transition,
            direction: reverse ? "reverse" : "normal",
            rate: reverse ? 2 : 1,
          })
          .then(() => {
            setCurrentScreen(targetScreen);
            setIsAnimating(false);
          })
          .catch((error) => {
            console.error("Error playing sequence:", error);
            setIsAnimating(false);
          });
      })
      .catch((error) => {
        console.error("Error in project ready:", error);
      });
  }, [
    targetScreen,
    currentScreen,
    direction,
    setCurrentScreen,
    isAnimating,
    setIsAnimating,
  ]);

  const cameraTargetRef = useRef<THREE.Mesh>(null);

  return (
    <div className="fixed z-0 h-screen w-screen">
      <Leva hidden={true} />
      <Canvas
        camera={{ position: [5, 5, 10], fov: 30, near: 1 }}
        gl={{
          preserveDrawingBuffer: true,
        }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" environmentIntensity={2} />
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
        </Suspense>
      </Canvas>
    </div>
  );
}
