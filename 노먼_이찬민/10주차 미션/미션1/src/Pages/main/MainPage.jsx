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
import { FadeLoader } from "react-spinners";

function MainPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const getMusicsStatus = useSelector((state) => state.cart.getMusicsStatus);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    dispatch(getMusics());
  }, [dispatch]);

  // console.log(items);
  return (
    <>
      {getMusicsStatus == ("" || "pending") && <FadeLoader />}
      {getMusicsStatus == "rejected" && (
        <S.ErrorBox>
          <p>서버와의 통신에 오류가 발생했습니다</p>
          <S.ErrorButton
            onClick={() => {
              location.reload();
            }}
          >
            새로고침
          </S.ErrorButton>
        </S.ErrorBox>
      )}
      {getMusicsStatus == "fulfilled" && (
        <S.Container>
          <h2>당신이 선택한 음반</h2>
          {items.map((item) => {
            return <MusicItem key={item.id} props={item}></MusicItem>;
          })}
          <S.TotalPrice>총 가격 : {totalPrice}</S.TotalPrice>
          <S.InitButton
            onClick={() => {
              dispatch(openModal());
            }}
          >
            장바구니 초기화
          </S.InitButton>
          <InitModal></InitModal>
        </S.Container>
      )}
    </>
  );
}

export default MainPage;
