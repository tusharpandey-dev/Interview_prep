import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Cube = () => {
  const ref = useRef();

  const [isRotating, setIsRotating] = useState(true);
  const [speed, setSpeed] = useState(0.01);
  const [hovered, setHovered] = useState(false);

  // Create 3-color face materials
  const createMaterials = () => [
    new THREE.MeshStandardMaterial({ color: "red" }),
    new THREE.MeshStandardMaterial({ color: "green" }),
    new THREE.MeshStandardMaterial({ color: "blue" }),
    new THREE.MeshStandardMaterial({ color: "red" }),
    new THREE.MeshStandardMaterial({ color: "green" }),
    new THREE.MeshStandardMaterial({ color: "blue" }),
  ];

  const [materials, setMaterials] = useState(createMaterials);

  // 🔁 Animation loop
  useFrame(() => {
    if (isRotating && !hovered) {
      ref.current.rotation.x += speed;
      ref.current.rotation.y += speed;
    }
  });

  // 🎨 Randomize colors on click
  const randomizeColors = () => {
    const randomColor = () =>
      new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`);

    setMaterials([
      new THREE.MeshStandardMaterial({ color: randomColor() }),
      new THREE.MeshStandardMaterial({ color: randomColor() }),
      new THREE.MeshStandardMaterial({ color: randomColor() }),
      new THREE.MeshStandardMaterial({ color: randomColor() }),
      new THREE.MeshStandardMaterial({ color: randomColor() }),
      new THREE.MeshStandardMaterial({ color: randomColor() }),
    ]);
  };

  return (
    <mesh
      ref={ref}
      material={materials}
      scale={hovered ? 1.2 : 1}
      onClick={() => {
        setIsRotating(!isRotating);
        randomizeColors();
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
    >
      <boxGeometry args={[2, 2, 2]} />
    </mesh>
  );
};

export default Cube;
