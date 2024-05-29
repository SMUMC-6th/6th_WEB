import Button from "../Button/Button";
import * as S from "./Counter.style";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount, zero } from "../../store/counters/counterSlice";

const Counter = () => {
  const { cnt } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <span>{cnt}</span>
      <S.Wrapper>
        <Button
          text={"1씩 증가"}
          onClick={() => dispatch(incrementByAmount(1))}
        />
        <Button
          text={"1씩 감소"}
          onClick={() => dispatch(incrementByAmount(-1))}
        />
        <Button
          text={"10씩 증가"}
          onClick={() => dispatch(incrementByAmount(10))}
        />
        <Button text={"초기화"} onClick={() => dispatch(zero())} />
        <Button
          text={"10씩 감소"}
          onClick={() => dispatch(incrementByAmount(-10))}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Counter;
