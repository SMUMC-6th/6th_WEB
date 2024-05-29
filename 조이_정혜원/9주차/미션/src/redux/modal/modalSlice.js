import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { open } = modalSlice.actions;
export default modalSlice.reducer;
