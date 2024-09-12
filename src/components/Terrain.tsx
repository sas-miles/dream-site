import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef } from "react";
import * as THREE from "three";

function Terrain() {
  const terrain = useTexture("/textures/terrain03.png");

  const { speed } = useControls("Rotation Speed", {
    speed: { value: 0.01, min: 0, max: 1 },
  });

  const ref = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.z -= speed * delta;
    }
  });

  return (
    <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={ref}>
      <planeGeometry args={[50, 50, 512, 512]} />
      <meshStandardMaterial
        wireframe
        displacementMap={terrain}
        displacementScale={5}
        color={"#737373"}
      />
    </mesh>
  );
}

export default Terrain;
