import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Sun from "./Sun";
import Planet from "./Planet";
import Orbit from "./Orbit";
import Lights from "./Lights";
import CameraController from "./CameraController";

const SolarSystem = () => {
  return (
    <Canvas camera={{ position: [0, 10, 20] }}>
      <Lights />
      <CameraController />

      <Sun />

      <Orbit radius={5} />
      <Planet
        name="Earth"
        textureUrl="/src/assets/earth.jpg"
        size={0.6}
        distance={5}
        speed={0.01}
      />

      <Orbit radius={8} />
      <Planet
        name="Mars"
        textureUrl="/src/assets/mars.jpg"
        size={0.5}
        distance={8}
        speed={0.008}
      />

      <Orbit radius={12} />
      <Planet
        name="Jupiter"
        textureUrl="/src/assets/jupiter.jpg"
        size={1.2}
        distance={12}
        speed={0.005}
      />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SolarSystem;
