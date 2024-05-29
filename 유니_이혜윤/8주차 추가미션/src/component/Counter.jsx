import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { decreaseUserInputNum, decrement, increaseUserInputNum, increment, initialize } from "../state/counter/counterSlice";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #d2d2d2;
  width: 80%;
  height: 500px;
  
  border-radius: 10px;
  gap: 30px;

  p {
    font-size: 30px;
  }

  h1 {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #FFD200;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Button = styled.div`
  button {
    border: none;
    border-radius: 5px;
    margin: 20px;

    width: 90px;
    height: 30px;

    background-color: #FFA500;
    color: white;

    cursor:pointer;
  }
`;

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();


  return (
    <Container>
      <Box>
        <p>⏰카운터⏰</p>
        <h1>{count}</h1>
        <Button>
          <button onClick = {() => dispatch(increment())}>1씩 증가</button>
          <button onClick = {() => dispatch(decrement())}>1씩 감소</button>
          <button onClick = {() => dispatch(increaseUserInputNum(10))}>10씩 증가</button>
          <button onClick = {() => dispatch(decreaseUserInputNum({ number: 10, hi: 'hyeyoon'}))}>10씩 감소</button>
          <button onClick={() => dispatch(initialize())}>초기화</button>
        </Button>
      </Box>
    </Container>
  )
}

export default Counter;