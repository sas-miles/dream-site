"use client";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import React from "react";
import Terrain from "./Terrain";
import { Drone } from "./Drone";

export default function Scene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <Environment preset="dawn" />
      <OrbitControls />
      <Drone />
      <Terrain />
    </Canvas>
  );
}
