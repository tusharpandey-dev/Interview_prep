const SectionBox = ({ position, color, onClick }) => {
  return (
    <mesh position={position} onClick={onClick}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default SectionBox;
