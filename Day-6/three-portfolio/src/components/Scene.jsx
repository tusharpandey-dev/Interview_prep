import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import Lights from "./Lights";
import Stars from "./Stars";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 8] }}
      style={{ width: "100%", height: "100%" }}
    >
      <Lights />
      <Stars />

      {/* ✅ React component → Capital letter */}
      <Cube />

      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
