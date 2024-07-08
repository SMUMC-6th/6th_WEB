import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCartItem = createAsyncThunk('load/cartItem', async () => {
  const response = await fetch('http://localhost:8080/musics');
  const data = await response.json();
  return data;
});

const InitialCount = (items) => {
  return items.reduce((acc, item) => acc + item.amount, 0);
};

const InitialPrice = (items) => {
  return items.reduce((acc, item) => acc + item.amount * item.price, 0);
};

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  status: 'idle',
  error: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCartItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadCartItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.totalCount = InitialCount(action.payload);
        state.totalPrice = InitialPrice(action.payload);
      })
      .addCase(loadCartItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {increase, decrease, remove, clearCart} = cartSlice.actions;

export default cartSlice.reducer;