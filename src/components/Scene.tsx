"use client";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { getProject } from "@theatre/core";

import Terrain from "./Terrain";
import { Drone } from "./Drone";

import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e } from "@theatre/r3f";
import { SheetProvider } from "@theatre/r3f";

studio.initialize();
studio.extend(extension);

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
} from "@react-three/postprocessing";
import { Leva } from "leva";

export default function Scene() {
  const handronProject = getProject("Handron");
  const mainSheet = handronProject.sheet("Main");
  return (
    <>
      <Leva hidden={true} />;
      <Canvas
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <Suspense fallback={null}>
          <EffectComposer multisampling={0}>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={480}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
              opacity={3}
            />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
          <Environment preset="night" environmentIntensity={2} />

          <OrbitControls />
          <SheetProvider sheet={mainSheet}>
            <e.group theatreKey="Drone">
              <Drone />
            </e.group>
            <e.group theatreKey="Terrain">
              <Terrain />
            </e.group>
          </SheetProvider>
        </Suspense>
      </Canvas>
    </>
  );
}
