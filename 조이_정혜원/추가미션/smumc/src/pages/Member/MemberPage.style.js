import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  color: inherit;
  height: 100%;
  margin-top: 140px;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100%;
`;

const SelectMenu = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-bottom: 80px;

  h1 {
    margin: 10px;
    font-size: 20px;
    ${theme.FONT.PRETENDARD_BOLD};
    letter-spacing: 1px;

    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      transition: transform 400ms ease-out;
    }

    &.selected {
      color: ${(props) => props.theme.primary};
      border-bottom: 2px solid ${(props) => props.theme.primary};
    }
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    margin-bottom: 50px;
    h1 {
      font-size: 17px;
    }
  }
`;
export { Container, Wrapper, SelectMenu };
