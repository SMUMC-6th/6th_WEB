import React from "react";
import { TotalContainer, TotalWrapper, TotalLabel, TotalAmount, Hr, Button } from "./Cart.style";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../redux/cartSlice";
import { openModal } from "../redux/modalSlice";
import { useEffect } from "react";

export default function Account() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <TotalContainer>
      <Hr />
      <br></br>
      <TotalWrapper>
        <TotalLabel>총 가격</TotalLabel>
        <TotalAmount>₩{total}</TotalAmount>
      </TotalWrapper>
      <Button
        onClick={() => {
          dispatch(openModal());
        }}
      >
        장바구니 초기화
      </Button>
    </TotalContainer>
  );
}
