import { useFrame } from "@react-three/fiber";

export default function CameraRig({ children }) {
  useFrame(({ camera, mouse }) => {
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return children;
}
