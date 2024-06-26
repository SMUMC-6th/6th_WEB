import { createSlice } from "@reduxjs/toolkit";
import cartItem from '../constants/cartItems';

const InitialCount = (items) => {
  return items.reduce((acc, item) => acc + item.amount, 0);
};

const InitialPrice = (items) => {
  return items.reduce((acc, item) => acc + item.amount * item.price, 0);
};

const initialState = {
  items: cartItem,
  totalCount: InitialCount(cartItem) || 0,
  totalPrice: InitialPrice(cartItem) || 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.items.find(e => e.id === action.payload);
      if (item) {
        item.amount += 1;
        state.totalCount += 1;
        state.totalPrice += item.price;
      }
    },
    decrease: (state, action) => {
      const item = state.items.find(e => e.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
          state.totalCount -= 1;
          state.totalPrice -= item.price;
        } else {
          state.items = state.items.filter(e => e.id !== action.payload);
          state.totalCount -= 1;
          state.totalPrice -= item.price;
        }
      }
    },
    remove: (state, action) => {
      const item = state.items.filter(e => e.id !== action.payload);
      if (item) {
        state.totalCount -= 1;
        state.totalPrice -= item.price;
        state.items = state.items.filter(e => e.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    }
  }
})

export const {increase, decrease, remove, clearCart} = cartSlice.actions;

export default cartSlice.reducer;