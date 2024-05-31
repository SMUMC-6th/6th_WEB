import { create } from "zustand";

const useModalStore = create((set) => ({
  modal: false,
  open: () =>
    set((state) => ({
      modal: !state.modal,
    })),
}));

export default useModalStore;
