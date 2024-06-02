import React from "react";
import * as S from "./MainPage.style";
import MusicItem from "../../components/MusicItem/MusicItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalCount,
  getTotalPrice,
  initialize,
} from "../../state/cart/cartSlice";

function MainPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <S.Container>
      <h2>당신이 선택한 음반</h2>
      {items.map((item) => {
        return <MusicItem key={item.id} props={item}></MusicItem>;
      })}
      <div>총 가격 : {useSelector((state) => state.cart.totalPrice)}</div>
      <button
        onClick={() => {
          dispatch(initialize());
          dispatch(getTotalCount());
          dispatch(getTotalPrice());
        }}
      >
        장바구니 초기화
      </button>
    </S.Container>
  );
}

export default MainPage;
