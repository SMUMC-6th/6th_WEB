import { create } from "zustand";
import cartItems from "../constants/cartItems";

const useCartStore = create((set) => ({
  cart: cartItems,
  totalNum: 12,
  totalPrice: 276000,
  increase: (id) =>
    set((state) => ({
      cart: state.cart.map((e) => (e.id === id ? { ...e, amount: e.amount + 1 } : e)),
    })),
  decrease: (id) =>
    set((state) => ({
      cart: state.cart.map((e) => (e.id === id ? { ...e, amount: e.amount - 1 } : e)),
    })),
  remove: (id) =>
    set((state) => ({
      cart: state.cart.filter((e) => e.id !== id),
    })),
  clear: () => set({ cart: [] }),
  calculateTotals: () =>
    set((state) => ({
      totalNum: state.cart.reduce((acc, e) => acc + e.amount, 0),
      totalPrice: state.cart.reduce((acc, e) => acc + e.amount * e.price, 0),
    })),
}));

export default useCartStore;
