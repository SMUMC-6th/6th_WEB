import styled from "styled-components";
import theme from "../../../../theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 64%;
    object-fit: cover;
  }

  width: 330px;
  height: 460px;
  border-radius: 20px;
  border: ${(props) => (props.theme === theme.darkTheme ? "2px solid #424242" : "2px solid #ededed")};
  background-color: ${(props) => (props.theme === theme.darkTheme ? "#ededed" : "#fff")};
  color: black;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: transform 700ms ease-in-out 0s;
    border: 2px solid #ededed;
  }
`;

const TextWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  padding:20px;
  height: 36%;

  h3 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    margin: 5px 0 15px;
    font-size: 20px;
    letter-spacing: 0.6px;
  }

  div {
    width: 90%;
    word-break: keep-all;
    text-align: center;
    font-size: 13px;
    margin-bottom: 10px;
  }

  p {
    font-size: 11px;
    text-align: center;
    background-color: ${(props) => (props.theme === theme.darkTheme ? "rgb(1, 255, 111, 0.2)" : "#c8e8c5")};
    color: ${theme.COLOR.GRAY};
    font-family: ${theme.FONT.PRETENDARD_MEDIUM};
    border-radius: 15px;
    padding: 5px 10px;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    padding: 10px;

    h3 {
      font-size: 15px;
    }
    div {
      font-size: 11.5px;
    }

    p {
      font-size: 10px;
      padding: 3px 8px;
    }
  }
`;

export { Container, TextWrapper };
