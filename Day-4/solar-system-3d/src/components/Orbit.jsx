import { Line } from "@react-three/drei";

const Orbit = ({ radius }) => {
  const points = [];

  for (let i = 0; i <= 100; i++) {
    const angle = (i / 100) * Math.PI * 2;
    points.push([
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius * 0.6, // ellipse
    ]);
  }

  return <Line points={points} color="gray" />;
};

export default Orbit;
