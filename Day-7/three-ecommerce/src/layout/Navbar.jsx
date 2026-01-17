import { useStore } from "../store/useStore";

export default function Navbar() {
  const cart = useStore((s) => s.cart);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <nav className="nav">
      <h2>3DStore</h2>
      <div>Cart ({totalItems})</div>
    </nav>
  );
}
