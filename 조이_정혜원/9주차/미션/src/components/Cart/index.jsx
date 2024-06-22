import { useDispatch, useSelector } from "react-redux";
import * as S from "./Cart.style";
import { calculateTotals, loadCartItems } from "../../redux/cart/cartSlice";
import { useEffect } from "react";
import { Music, Modal, Button } from "../";
import { PacmanLoader } from "react-spinners";

const Cart = () => {
  const { cart, totalPrice, status } = useSelector((state) => state.cart);
  const { modal } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  if (status === "pending") {
    return (
      <S.Container>
        <h3>로딩 중 입니다</h3>
        <PacmanLoader color="#FF5276" />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <h3>당신이 선택한 음반</h3>
      {cart.length !== 0 ? (
        <S.Wrapper>
          {cart.map((e) => (
            <Music music={e} key={e.id} />
          ))}
          <S.FooterWrapper>
            <div>총 가격</div>
            <div>₩ {totalPrice}</div>
          </S.FooterWrapper>
          <Button text={"장바구니 초기화"} />
          {modal ? <Modal /> : null}
        </S.Wrapper>
      ) : (
        <S.Wrapper>고객님이 좋아하는 음반을 담아보세요 !</S.Wrapper>
      )}
    </S.Container>
  );
};

export default Cart;
