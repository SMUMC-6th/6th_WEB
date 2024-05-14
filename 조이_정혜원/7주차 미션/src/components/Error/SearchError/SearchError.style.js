import styled, { keyframes } from "styled-components";
import { FiAlertOctagon } from "react-icons/fi";
import theme from "../../../styles/theme";

const colorChange = keyframes`
  from {
    color: rgb(255, 249, 69, 0.8);
  }
  to {
    color: white;
  }
`;

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

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
