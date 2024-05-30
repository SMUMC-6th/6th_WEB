import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //동작 이름 선언
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increaseUserInnputNum: (state, { payload }) => {
      state.count += payload;
    },
    decreaseUserInnputNum: (state, { payload }) => {
      state.count -= payload;
    },
    initial: (state) => {
      state.count = 0;
    },
  },
});

export const {
  increment,
  decrement,
  increaseUserInnputNum,
  decreaseUserInnputNum,
  initial,
} = counterSlice.actions;
export default counterSlice.reducer;
