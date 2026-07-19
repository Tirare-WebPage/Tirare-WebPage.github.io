'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Scene from './Scene';

export default function CADViewer() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        shadows
        camera={{
          position: [3, 2, 6],
          fov: 35,
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}