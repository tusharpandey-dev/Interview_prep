import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Sun = () => {
  const ref = useRef();
  const texture = useLoader(TextureLoader, "/src/assets/sun.jpg");

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        emissive="orange"
        emissiveIntensity={1}
      />
    </mesh>
  );
};

export default Sun;
