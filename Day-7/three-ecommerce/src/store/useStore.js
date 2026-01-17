import { create } from "zustand";

export const useStore = create((set, get) => ({
  // product config
  color: "#ffffff",
  material: "metal",
  price: 899,

  // cart
  cart: [],

  setColor: (color) => set({ color }),

  setMaterial: (material) =>
    set({
      material,
      price: material === "glass" ? 1099 : 899,
    }),

  addToCart: () =>
    set((state) => {
      const existing = state.cart.find(
        (item) => item.id === "product-1"
      );

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === "product-1"
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            id: "product-1",
            name: "Premium Smart Device",
            price: state.price,
            material: state.material,
            color: state.color,
            qty: 1,
          },
        ],
      };
    }),

  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0),
    })),

  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));
