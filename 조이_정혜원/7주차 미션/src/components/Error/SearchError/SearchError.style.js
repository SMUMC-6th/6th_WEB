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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;

  p {
    font-size: 13px;
    letter-spacing: 0.9px;
  }
`;

const Icon = styled(FiAlertOctagon)`
  width: 7%;
  height: 7%;

  margin-bottom: 30px;
  animation: ${colorChange} 450ms 0s infinite linear alternate;
`;

export { Container, Icon };
