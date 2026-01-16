import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";

const Planet = ({ name, textureUrl, size, distance, speed }) => {
  const planetRef = useRef();
  const orbitRef = useRef();
  const texture = useLoader(TextureLoader, textureUrl);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    orbitRef.current.rotation.y += speed;
    planetRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={orbitRef}>
      <mesh
        ref={planetRef}
        position={[distance, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} />

        {hovered && (
          <Html distanceFactor={10}>
            <div style={{ color: "white", fontSize: "12px" }}>
              {name}
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
};

export default Planet;
