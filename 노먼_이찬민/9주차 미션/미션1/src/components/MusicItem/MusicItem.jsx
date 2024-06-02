import React from "react";
import * as S from "./MusicItem.style";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  getTotalCount,
  getTotalPrice,
} from "../../state/cart/cartSlice";

// const count = useSelector((state) => state.counter.count); // state는 initialState가 출력됨

function MusicItem(props) {
  const dispatch = useDispatch();
  const { id, title, singer, price, img, amount } = props.props;
  // console.log(id, title, singer, price, img, amount);
  return (
    <S.Container>
      <S.MusicImage imageURL={img}></S.MusicImage>
      <S.DescriptContainer>
        <div>
          {title} | {singer}
        </div>
        <div>₩ {price}</div>
      </S.DescriptContainer>
      <S.SettingsContainer>
        <S.UpButton
          onClick={() => {
            dispatch(increment(id));
            dispatch(getTotalCount());
            dispatch(getTotalPrice());
          }}
        ></S.UpButton>
        <div>{amount}</div>
        <S.DownButton
          onClick={() => {
            dispatch(decrement(id));
            dispatch(getTotalCount());
            dispatch(getTotalPrice());
          }}
        ></S.DownButton>
      </S.SettingsContainer>
    </S.Container>
  );
}

export default MusicItem;
