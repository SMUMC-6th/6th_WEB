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
      const item = state.cart.find((e) => e.id === payload); // find 결과 없으면 undefined
      if (item) item.amount += 1;
      // state.cart = state.cart.map((e) => (e.id === payload ? { ...e, amount: e.amount + 1 } : e));
      // map으로 처리할 경우 배열의 모든 요소를 한 번씩 복사하고, 조건에 맞는 요소는 새로운 객체를 생성하여 복사하는 과정
      // find를 사용할 경우 배열에서 해당 아이템을 한 번만 찾고, 바로 그 아이템의 amount 속성을 증가
      // 메모리 사용 효율성, 속도 측면에서 find를 사용하는 것이 좋음
    },
    decrease: (state, { payload }) => {
      const item = state.cart.find((e) => e.id === payload);
      if (item) item.amount -= 1;
    },
    remove: (state, { payload }) => {
      state.cart = state.cart.filter((e) => e.id !== payload);
    },
    clear: (state) => {
      state.cart = [];
    },
    calculateTotals: (state) => {
      // state.totalNum = state.cart.reduce((acc, e) => (acc += e.amount), 0);
      // state.totalPrice = state.cart.reduce((acc, e) => (acc += e.amount * e.price), 0);
      let totalNum = 0;
      let totalPrice = 0;

      state.cart.forEach((e) => {
        totalNum += e.amount;
        totalPrice += e.amount * e.price;
      });

      state.totalNum = totalNum;
      state.totalPrice = totalPrice;
    },
  },
});

export const { increase, decrease, remove, clear, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
