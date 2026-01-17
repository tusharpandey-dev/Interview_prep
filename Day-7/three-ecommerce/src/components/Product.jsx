import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Product() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[2, 1, 0.5]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}
