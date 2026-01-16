const UI = ({ setColor }) => {
  return (
    <div className="ui">
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("black")}>Black</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
};

export default UI;
