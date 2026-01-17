import { useStore } from "../store/useStore";

export default function Controls() {
  const setColor = useStore((state) => state.setColor);
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="controls">
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>

      <button
        className="cart"
        onClick={() =>
          addToCart({ id: Date.now(), name: "3D Product" })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
