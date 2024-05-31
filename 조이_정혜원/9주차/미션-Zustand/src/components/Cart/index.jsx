import * as S from "./Cart.style";
import { Music, Button, Modal } from "../";
import { useCartStore, useModalStore } from "../../store";
import { useEffect } from "react";

const Cart = () => {
  const { cart, calculateTotals, totalPrice } = useCartStore((state) => state);
  const { modal } = useModalStore((state) => state);

  useEffect(() => {
    calculateTotals();
  }, [cart]);

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
