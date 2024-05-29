import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
