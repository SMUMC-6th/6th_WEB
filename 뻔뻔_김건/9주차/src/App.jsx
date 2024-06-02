import React from "react";
import Navbar from "./component/Navbar";
import { Cart } from "./component/Cart";
import Total from "./component/Total";
import { Title, AppContainer, MessageContainer } from "./component/Cart.style";
import Modal from "./component/Modal";
import { useSelector } from "react-redux";

export default function App() {
  const showCart = useSelector((state) => state.modal.showCart);

  return (
    <AppContainer>
      <Navbar />
      <br />
      <Title>당신이 선택한 음반</Title>
      {showCart ? (
        <>
          <Cart />
          <Total />
        </>
      ) : (
        <MessageContainer>
          <p>고객님이 좋아하는 음반을 담아보세요 ~ !</p>
        </MessageContainer>
      )}
      <Modal />
    </AppContainer>
  );
}
