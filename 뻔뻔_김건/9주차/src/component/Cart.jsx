import React from "react";
import {
  Img,
  ItemsContainer,
  CountContainer,
  CartContainer,
  Button1,
} from "./Cart.style";
import { ChevronUp, ChevronDown } from "../constants/icons";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, removeItem } from "../redux/cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      {cartItems.map((item) => (
        <CartContainer key={item.id}>
          <Img src={item.img} alt={item.title} />

          <ItemsContainer>
            {item.title} | {item.singer} <br /> ₩ {item.price}
          </ItemsContainer>

          <CountContainer>
            <Button1
              onClick={() => {
                dispatch(increase(item.id));
              }}
            >
              <ChevronUp />
            </Button1>

            <h3>{item.amount}</h3>

            <Button1
              onClick={() => {
                item.amount >= 2
                  ? dispatch(decrease(item.id))
                  : dispatch(removeItem(item.id));
              }}
            >
              <ChevronDown />
            </Button1>
          </CountContainer>
        </CartContainer>
      ))}
    </div>
  );
}