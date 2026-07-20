'use client';

import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

import * as THREE from 'three';

interface ModelProps {
  modelPath: string;
}

export default function Model({
  modelPath,
}: ModelProps) {

  const { scene } = useGLTF(modelPath);

  const processedScene = useMemo(() => {

    const clonedScene = scene.clone(true);

    clonedScene.scale.setScalar(0.05);

    const box = new THREE.Box3().setFromObject(
      clonedScene
    );

    const center = box.getCenter(
      new THREE.Vector3()
    );

    clonedScene.position.set(
      -center.x,
      -center.y,
      -center.z
    );

    return clonedScene;

  }, [scene]);

  return (
    <primitive object={processedScene} />
  );
}