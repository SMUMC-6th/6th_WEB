import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  showCart: true,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    hideCart: (state) => {
      state.showCart = false;
    },
  },
});

export const { openModal, closeModal, hideCart } = modalSlice.actions;
export default modalSlice.reducer;
