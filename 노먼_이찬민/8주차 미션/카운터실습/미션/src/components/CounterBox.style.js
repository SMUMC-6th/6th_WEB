import styled from "styled-components";

const CounterContainer = styled.div`
  width: 70%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  background-color: #93ece0;
  border-radius: 10px;
`;

const Header = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CounterButton = styled.button`
  width: 15%;
  height: 90%;
  gap: 20px;
  border-radius: 10px;
  background-color: #2debd2;
`;

export { CounterContainer, Header, ButtonContainer, CounterButton };
