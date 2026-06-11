import { Canvas } from "@react-three/fiber";

function Star() {
  return (
    <mesh position={[
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5
    ]}>
      <sphereGeometry args={[0.05]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function ParticleGalaxy() {
  return (
    <div className="absolute inset-0">

      <Canvas>

        <ambientLight />

        {Array.from({ length: 200 }).map((_, i) => (
          <Star key={i} />
        ))}

      </Canvas>

    </div>
  );
}