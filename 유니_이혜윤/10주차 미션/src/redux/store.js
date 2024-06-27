import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import modalSlice from "./modalSlice";
import musicSlice from "./musicSlice";

export default configureStore({
  reducer: {
    cart: cartSlice, modal: modalSlice, musics: musicSlice
  }
})
