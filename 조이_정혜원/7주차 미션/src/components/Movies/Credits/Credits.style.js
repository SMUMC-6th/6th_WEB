import { styled } from "styled-components";
import theme from "../../../styles/theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 500px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    flex-direction: column;
    align-items: center;
  }

  /* @media ${theme.SCREEN_SIZE.MOBILE} {
    width: 550px;
  } */
`;

const CreditWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 20px 30px;
  overflow-y: auto;
  overflow-x: hidden;

  height: 100%;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(126, 247, 205, 0.5);
    border-radius: 20px;
    height: 40%;
  }

  &::-webkit-scrollbar-track {
    background: rgba(249, 249, 249, 0.1);
  }

  /* @media ${theme.SCREEN_SIZE.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  } */

  @media ${theme.SCREEN_SIZE.MOBILE} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export { Wrapper, CreditWrapper };
