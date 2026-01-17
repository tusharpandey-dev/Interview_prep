import { useStore } from "../store/useStore";

export default function ProductConfigurator() {
  const addToCart = useStore((s) => s.addToCart);
  const setColor = useStore((s) => s.setColor);
  const setMaterial = useStore((s) => s.setMaterial);
  const price = useStore((s) => s.price);

  return (
    <div className="config">
      <h1>Premium Smart Device</h1>
      <p className="price">${price}</p>

      <h3>Colors</h3>
      <div className="colors">
        <span onClick={() => setColor("#fff")} />
        <span onClick={() => setColor("#000")} />
        <span onClick={() => setColor("#2563eb")} />
      </div>

      <h3>Material</h3>
      <button onClick={() => setMaterial("metal")}>Metal</button>
      <button onClick={() => setMaterial("glass")}>Glass</button>

      {/* ✅ VERY IMPORTANT */}
      <button className="add" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}
