import { useStore } from "../store/useStore";

export default function Cart() {
  const cart = useStore((s) => s.cart);

  if (cart.length === 0) {
    return <h2 style={{ padding: 40 }}>Cart is empty</h2>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Qty: {item.qty}</p>
        </div>
      ))}
    </div>
  );
}
