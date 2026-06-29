import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingSphere() {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.003;
      sphereRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#a855f7"
        emissive="#9333ea"
        emissiveIntensity={2}
        wireframe
      />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />
        <RotatingSphere />
      </Canvas>
    </div>
  );
}