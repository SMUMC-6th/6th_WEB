import React from "react";
import { useState } from "react";
import * as S from "./CounterBox.style";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseUserInputNum,
  increment,
  decrementUserInputNum,
  initialize,
} from "../state/counter/counterSlice";

function CounterBox() {
  const count = useSelector((state) => state.counter.count); // state는 initialState가 출력됨
  const dispatch = useDispatch();

  return (
    <S.CounterContainer>
      <S.Header>{count}</S.Header>
      <S.ButtonContainer>
        <S.CounterButton onClick={() => dispatch(increment())}>
          +1
        </S.CounterButton>
        <S.CounterButton onClick={() => dispatch(increaseUserInputNum(10))}>
          +10
        </S.CounterButton>
        <S.CounterButton onClick={() => dispatch(decrement())}>
          -1
        </S.CounterButton>
        <S.CounterButton
          onClick={() =>
            dispatch(decrementUserInputNum({ num: 10, chan: "chanmin" }))
          }
        >
          -10
        </S.CounterButton>
        <S.CounterButton
          onClick={() => {
            dispatch(initialize());
          }}
        >
          초기화
        </S.CounterButton>
      </S.ButtonContainer>
    </S.CounterContainer>
    // <div>
    //   <h1></h1>
    //   <button onClick={() => dispatch(increment())}>+1</button>
    //   <button onClick={() => dispatch(increaseUserInputNum(10))}>+10</button>
    //   <button onClick={() => dispatch(decrement())}>-1</button>
    //   <button
    //     onClick={() =>
    //       dispatch(decrementUserInputNum({ num: 10, chan: "chanmin" }))
    //     }
    //   >
    //     -10
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch(initialize());
    //     }}
    //   >
    //     초기화
    //   </button>
    // </div>
  );
}

export default CounterBox;
