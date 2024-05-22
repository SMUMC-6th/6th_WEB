import styled from "styled-components";
import theme from "../../../../theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}

  margin-top: 50px;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  width: 500px;

  button {
    border: none;
    background-color: initial;
    color: ${(props) => props.theme.textColor};
    font-size: 20px;
    margin: 10px 20px 30px;
    padding-bottom: 3px;

    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      transition: transform 600ms ease-in-out 0s;
      color: ${(props) => props.theme.primary};
    }

    &.selected {
      color: ${(props) => props.theme.primary};
      border-bottom: 2px solid ${(props) => props.theme.primary};
    }
  }
`;

const TextBox = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 750px;
  height: 300px;
  word-break: keep-all;
  text-align: center;
  font-size: 15px;
  font-family: ${(props) =>
    props.theme === theme.darkTheme ? theme.FONT.PRETENDARD_REGULAR : theme.FONT.PRETENDARD_MEDIUM};
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.footerColor};
  border-radius: 20px;
  padding: 0 50px;
  word-spacing: 0.4px;
  line-height: 30px;
  span {
    opacity: 0.9;
  }
`;

export { Container, Wrapper, TextBox };
