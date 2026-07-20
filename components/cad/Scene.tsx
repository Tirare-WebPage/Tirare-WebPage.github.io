import { Environment } from '@react-three/drei';

import Lights from './Lights';
import Model from './Model';

interface SceneProps {
  modelPath: string;
}

export default function Scene({
  modelPath,
}: SceneProps) {
  return (
    <>
      <color attach="background" args={['#050505']} />

      <Environment preset="warehouse" />

      <Lights />

      <Model modelPath={modelPath} />
    </>
  );
}