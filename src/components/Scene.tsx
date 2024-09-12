"use client";

import {
  CameraShake,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState } from "react";
import Terrain from "./Terrain";
import { Drone } from "./Drone";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function Scene() {
  return (
    <Canvas
      gl={{
        powerPreference: "high-performance",
        alpha: false,
        antialias: false,
        stencil: false,
        depth: false,
      }}
    >
      <EffectComposer multisampling={0} disableNormalPass={true}>
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
      <Drone />
      <Terrain />
    </Canvas>
  );
}
