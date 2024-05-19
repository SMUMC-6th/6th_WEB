import styled, { keyframes, css } from "styled-components";
import theme from "../../../theme";

const changeColor = keyframes`
  from {
    color: inherit;
  }
  to {
    color: ${theme.COLOR.PRIMARY}; }
`;

const changeColorLight = keyframes`
from {
  color : inherit;
} to {
  color: #117439;
}`;

const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme.textColor};

  img {
    margin-right: 80px;
  }

  div {
    margin-bottom: 30px;
    height: 300px;

    h1 {
      font-family: "Pretendard-Bold";
      word-break: keep-all;
      width: 50px;
      font-size: 55px;
      margin-bottom: 45px;

      b {
        animation: ${(props) =>
          props.theme === theme.darkTheme
            ? css`
                ${changeColor} 1s 0s infinite linear alternate
              `
            : css`
                ${changeColorLight} 1s 0s infinite linear alternate
              `};
      }
    }

    p {
      font-size: 16px;
      word-break: keep-all;
      font-family: ${(props) =>
        props.theme === theme.darkTheme ? theme.FONT.PRETENDARD_LIGHT : theme.FONT.PRETENDARD_MEDIUM};
      b {
        font-family: "Pretendard-Bold";
        color: ${(props) => (props.theme === theme.darkTheme ? theme.COLOR.LIGHT_GREEN : props.theme.primary)};
      }
    }

    button {
      margin-top: 20px;
      padding: 10px;
      width: 200px;
      height: 40px;
      border: ${(props) =>
        props.theme === theme.darkTheme ? "1px solid rgb(1, 255, 111, 0.5)" : "2px solid rgb(17, 116, 57, 0.5)"};
      border-radius: 10px;
      background-color: inherit;
      color: ${(props) => props.theme.textColor};
      letter-spacing: 1px;
      font-family: "Pretendard-Bold";

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.primary};
        opacity: 0.9;
        color: ${(props) => (props.theme === theme.darkTheme ? "black" : theme.lightTheme.bgColor)};
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;

    img {
      margin: 0;
    }

    div {
      margin-top: 10px;
    }
  }
`;

export { Container, changeColor, changeColorLight };
