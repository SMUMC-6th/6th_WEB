import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;
const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      nextId++;
      state.push({
        id: nextId,
        text: payload,
        complete: false,
      });

      console.log(payload);
    },
    remove: (state, { payload }) => {
      return state.filter((e) => e.id !== payload);
    },
    completed: (state, { payload }) => {
      return state.map((e) => (e.id === payload ? { ...e, complete: !e.complete } : e));
    },
  },
});

export const { add, remove, completed } = todoSlice.actions;
export default todoSlice.reducer;
