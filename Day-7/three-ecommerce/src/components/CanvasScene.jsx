import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense } from "react";
import Product from "./Product";
import Loader from "./Loader";

export default function CanvasScene() {
  return (
    <Canvas camera={{ position: [0, 2, 7], fov: 45 }} shadows>
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
        />

        <Product />

        <Environment preset="studio" />
        <ContactShadows blur={3} opacity={0.4} />

        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
