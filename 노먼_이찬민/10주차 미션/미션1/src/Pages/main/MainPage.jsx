import React, { useEffect } from "react";
import * as S from "./MainPage.style";
import MusicItem from "../../components/MusicItem/MusicItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalCount,
  getTotalPrice,
  initialize,
  getMusics,
} from "../../state/cart/cartSlice";
import { openModal } from "../../state/modal/modalSlice";
import InitModal from "../../components/initModal/InitModal";

function MainPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(getMusics());
  }, [dispatch]);

  // console.log(items);
  return (
    <S.Container>
      <h2>당신이 선택한 음반</h2>
      {items.map((item) => {
        return <MusicItem key={item.id} props={item}></MusicItem>;
      })}
      <S.TotalPrice>
        총 가격 : {useSelector((state) => state.cart.totalPrice)}
      </S.TotalPrice>
      <S.InitButton
        onClick={() => {
          dispatch(openModal());
        }}
      >
        장바구니 초기화
      </S.InitButton>
      <InitModal></InitModal>
    </S.Container>
  );
}

export default MainPage;
