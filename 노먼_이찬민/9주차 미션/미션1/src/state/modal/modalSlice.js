import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

// 로직 : action -> dispatch(useDispatch)로 실행
const modalSlice = createSlice({
  name: "modal", // 이 슬라이스를 구분하는 이름
  initialState, // initialState : initialState 처럼 똑같이 적는 경우 이렇게 쓸 수 있음
  reducers: {
    // 동작(로직)들 이름 정의 ( 매개변수 state는 inital state임 )
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer; // 리듀서를 통째로 반환해야 emutable한 기능 사용가능
