'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

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
          position: [0, 1.5, 12],
          fov: 45,
        }}
      >
        <Suspense fallback={null}>
          <Scene modelPath={modelPath} />
        </Suspense>

<OrbitControls
  target={[0, 0, 0]}
  enablePan={false}
  enableZoom={true}
  enableRotate={true}
  autoRotate={false}
  minDistance={2}
  maxDistance={20}
  makeDefault
/>
      </Canvas>
    </div>
  );
}