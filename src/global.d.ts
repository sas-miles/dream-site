import type { Object3DNode } from "@react-three/fiber";
import type * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: Object3DNode<THREE.Group, typeof THREE.Group>;
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
    }
  }
}
