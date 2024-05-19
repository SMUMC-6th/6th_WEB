import styled from "styled-components";
import theme from "../../../theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  h1 {
    color: ${(props) => props.theme.textColor};
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    letter-spacing: 2px;
    margin-bottom: 40px;
    opacity: 0.9;
  }

  b {
    color: ${(props) => props.theme.primary};
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};

  color: #fff;
  border-radius: 30px;
  background-color: ${(props) => props.theme.footerColor};
  width: 500px;

  div {
    text-align: center;
    width: 33.3%;
    background-color: ${(props) => props.theme.footerColor};
    color: ${theme.COLOR.GRAY};
    font-family: ${theme.FONT.PRETENDARD_MEDIUM};
    font-size: 20px;
    border-radius: 30px;
    padding: 15px 20px;

    &:hover {
      cursor: pointer;
    }

    &.selected {
      color: #fff;
      background-color: ${(props) => props.theme.primary};
    }
  }
`;

export { Container, Wrapper };
