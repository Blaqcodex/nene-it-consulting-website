import { Canvas } from "@react-three/fiber";

function Particles() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial wireframe />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0">

      <Canvas camera={{ position: [0, 0, 5] }}>

        <ambientLight />

        <Particles />

      </Canvas>

    </div>
  );
}