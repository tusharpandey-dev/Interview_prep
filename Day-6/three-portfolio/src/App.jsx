import { useState } from "react";
import Scene from "./components/Scene";
import Overlay from "./components/Overlay";
import "./index.css";

const App = () => {
  const [section, setSection] = useState(null);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Scene setSection={setSection} />
      <Overlay section={section} />
    </div>
  );
};

export default App;
