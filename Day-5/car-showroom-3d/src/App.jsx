import { useState } from "react";
import Scene from "./components/Scene";
import UI from "./components/UI";
import "./index.css";

const App = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <Scene color={color} />
      <UI setColor={setColor} />
    </>
  );
};

export default App;
