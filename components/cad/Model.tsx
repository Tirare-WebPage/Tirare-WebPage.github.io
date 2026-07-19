'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import * as THREE from 'three';

export default function Model() {

  const group = useRef<THREE.Group>(null);

  const { scene } = useGLTF('/cad/current/tirare.glb');

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group}>

      <primitive
        object={scene}
        scale={1}
      />

    </group>
  );
}

useGLTF.preload('/cad/current/tirare.glb');