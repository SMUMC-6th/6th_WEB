import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";

const initialState = {
  cart: cartItems,
  totalNum: 12,
  totalPrice: 276000,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, { payload }) => {
      state.cart = state.cart.map((e) => (e.id === payload ? { ...e, amount: e.amount + 1 } : e));
    },
    decrease: (state, { payload }) => {
      state.cart = state.cart.map((e) => (e.id === payload ? { ...e, amount: e.amount - 1 } : e));
    },
    remove: (state, { payload }) => {
      state.cart = state.cart.filter((e) => e.id !== payload);
    },
    clear: (state) => {
      state.cart.length = 0;
    },
    calculateTotals: (state) => {
      state.totalNum = state.cart.reduce((acc, e) => (acc += e.amount), 0);
      state.totalPrice = state.cart.reduce((acc, e) => (acc += e.amount * e.price), 0);
    },
  },
});

export const { increase, decrease, remove, clear, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
