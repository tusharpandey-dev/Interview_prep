import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Car = ({ color }) => {
  const { scene } = useGLTF("/src/assets/car.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color);
      }
    });
  }, [color, scene]);

  return <primitive object={scene} scale={1.5} />;
};

export default Car;
