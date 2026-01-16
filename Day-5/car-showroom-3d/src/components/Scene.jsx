import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Car from "./Car";
import Lights from "./Lights";

const Scene = ({ color }) => {
  return (
    <Canvas camera={{ position: [0, 2, 6] }}>
      <Environment preset="city" />
      <Lights />
      <Car color={color} />
      <OrbitControls enableZoom />
    </Canvas>
  );
};

export default Scene;
