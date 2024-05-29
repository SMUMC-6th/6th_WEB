import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cnt: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState, //initialState : initialState임 initialState이름 다르면 앞에처럼
  reducers: {
    // increment: (state) => {
    //   // state는 지금 initialState이 안에
    //   state.cnt += 1;
    // },
    // decrement: (state) => {
    //   state.cnt -= 1;
    // },
    incrementByAmount: (state, { payload }) => {
      console.log(state.cnt);
      state.cnt += payload;
    },
    // incrementByAmount: (state, action) => {
    //   console.log(action);
    //   state.cnt += action.payload;
    // },
    zero: (state) => {
      state.cnt = 0;
    },
  },
});

export const { incrementByAmount, zero } = counterSlice.actions;
export default counterSlice.reducer; // 그녕 counterSlice가 아니라 reducer
