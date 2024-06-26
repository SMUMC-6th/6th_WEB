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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 800px;
  height: 420px;

  margin: 10px 30px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 400px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    width: 250px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoResultContainer = styled.div`
  display: grid;
  width: 863px;
  height: 440px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 463px;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    width: 313px;
  }
`;

const Wrapper = styled.div``;

const TextBox = styled.div`
  color: white;
  ${theme.ALIGN.COLUMN_CENTER};

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
