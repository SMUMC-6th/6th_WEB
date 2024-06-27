import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import modalSlice from "./modal/modalSlice";
// store : 중앙 저장소

// 카운터 변수나 로직을 counter 폴더 (내부의 slice)에 저장
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
  },
});
