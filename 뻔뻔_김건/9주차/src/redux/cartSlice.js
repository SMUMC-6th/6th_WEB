import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../constants/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount += 1;
    },

    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount -= 1;
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === itemId);

      if (state.cartItems[itemIndex].amount <= 1) {
        state.cartItems.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      state.cartItems.splice(cartItems);
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;