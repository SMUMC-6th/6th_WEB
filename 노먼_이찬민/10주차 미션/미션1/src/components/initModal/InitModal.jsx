import React from "react";
import * as S from "./InitModal.style";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../state/modal/modalSlice";
import { getTotalCount, initialize } from "../../state/cart/cartSlice";

function InitModal() {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modal.isOpen);
  return (
    modalOpen && (
      <S.Container>
        <S.MessageBox>담아두신 모든 음원들을 초기화 하시겠습니까?</S.MessageBox>
        <S.ButtonBox>
          <S.Button
            color="rgba(137, 240, 215, 1)"
            onClick={() => {
              dispatch(initialize());
              // dispatch(getTotalCount());
              // dispatch(getTotalPrice());
              dispatch(closeModal());
            }}
          >
            네
          </S.Button>
          <S.Button
            color="rgba(244, 136, 134, 1)"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            아니요
          </S.Button>
        </S.ButtonBox>
      </S.Container>
    )
  );
}

export default InitModal;
