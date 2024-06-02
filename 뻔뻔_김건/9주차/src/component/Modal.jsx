import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, hideCart } from "../redux/modalSlice";
import { clearCart } from "../redux/cartSlice";
import {
  ModalBackground,
  ModalContainer,
  ModalButton
} from "./Cart.style";

export default function Modal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContainer>
        <h2>담아두신 모든 음반을 삭제하시겠습니까?</h2>
        <ModalButton
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
            dispatch(hideCart());
          }}
        >
          네
        </ModalButton>
        <ModalButton
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          아니요
        </ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
}
