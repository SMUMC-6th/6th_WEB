import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 동작 이름 선언
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increaseUserInputNum: (state, {payload}) => {
      state.count += payload;
    },
    decreaseUserInputNum: (state, action) => {
      state.count -= action.payload.number;
    },
    initialize: (state) => {
      state.count = 0;
    }
  },
});

export const {increment, decrement, increaseUserInputNum, decreaseUserInputNum, initialize} = counterSlice.actions;
export default counterSlice.reducer;