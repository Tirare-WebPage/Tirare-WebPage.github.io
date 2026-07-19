export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />

      <directionalLight
        intensity={3}
        position={[8, 10, 8]}
        castShadow
      />

      <directionalLight
        intensity={1}
        position={[-5, 5, -5]}
      />

      <hemisphereLight
        intensity={0.3}
      />
    </>
  );
}