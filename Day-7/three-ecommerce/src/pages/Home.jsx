import CanvasScene from "../components/CanvasScene";
import ProductConfigurator from "../components/ProductConfigurator";

export default function Home() {
  return (
    <div className="page">
      <div className="viewer">
        <CanvasScene />
      </div>
      <ProductConfigurator />
    </div>
  );
}
