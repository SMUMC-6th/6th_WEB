import styled, { keyframes } from "styled-components";
import { FiAlertOctagon } from "react-icons/fi";

const colorChange = keyframes`
  from {
    color: rgb(255, 249, 69, 0.8);
  }
  to {
    color: white;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 800px;
  height: 420px;

  margin: 10px 30px;
`;

const NoResultContainer = styled.div`
  display: grid;
  width: 800px;
  height: 420px;
`;

const Wrapper = styled.div``;

const TextBox = styled.div`
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-size: 13px;
    letter-spacing: 1px;
  }
`;

const Icon = styled(FiAlertOctagon)`
  width: 7%;
  height: 7%;

  margin-bottom: 30px;
  animation: ${colorChange} 450ms 0s infinite linear alternate;
`;

export { Container, NoResultContainer, Wrapper, TextBox, Icon };
