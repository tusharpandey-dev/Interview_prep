import { useThree, useFrame } from "@react-three/fiber";
import { useEffect } from "react";

const CameraController = () => {
  const { camera } = useThree();

  useEffect(() => {
    const onScroll = (e) => {
      camera.position.z += e.deltaY * 0.01;
    };
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  }, [camera]);

  useFrame(() => {
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default CameraController;
