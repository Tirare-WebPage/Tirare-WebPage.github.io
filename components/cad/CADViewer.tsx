'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Scene from './Scene';

interface CADViewerProps {
  modelPath: string;
}

export default function CADViewer({
  modelPath,
}: CADViewerProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '420px',
      }}
    >
      <Canvas
        shadows
        camera={{
          position: [3, 2, 6],
          fov: 35,
        }}
      >
        <Suspense fallback={null}>
          <Scene modelPath={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}