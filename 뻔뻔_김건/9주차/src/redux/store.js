import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
  },
});
