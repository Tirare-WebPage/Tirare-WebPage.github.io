import { Environment } from '@react-three/drei';

import Lights from './Lights';
import Model from './Model';

export default function Scene() {
  return (
    <>
      <color attach="background" args={['#050505']} />

      <Environment preset="warehouse" />

      <Lights />

      <Model />
    </>
  );
}