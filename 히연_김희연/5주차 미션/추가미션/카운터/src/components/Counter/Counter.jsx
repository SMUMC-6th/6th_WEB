import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseUserInnputNum,
  decrement,
  increaseUserInnputNum,
  increment,
  initial,
} from "../../state/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>1씩 증가</button>
      <button onClick={() => dispatch(decrement())}>1씩 감소</button>
      <button onClick={() => dispatch(increaseUserInnputNum(10))}>
        10씩 증가
      </button>
      <button onClick={() => dispatch(decreaseUserInnputNum(10))}>
        10씩 감소
      </button>
      <button onClick={() => dispatch(initial())}>초기화</button>
    </div>
  );
}
