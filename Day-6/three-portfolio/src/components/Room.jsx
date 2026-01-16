import SectionBox from "./SectionBox";

const Room = ({ setSection }) => {
  return (
    <>
      <SectionBox
        position={[-3, 0, 0]}
        color="orange"
        onClick={() => setSection("About")}
      />
      <SectionBox
        position={[0, 0, 0]}
        color="green"
        onClick={() => setSection("Projects")}
      />
      <SectionBox
        position={[3, 0, 0]}
        color="blue"
        onClick={() => setSection("Contact")}
      />
    </>
  );
};

export default Room;
