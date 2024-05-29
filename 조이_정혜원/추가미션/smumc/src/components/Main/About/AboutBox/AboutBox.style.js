import styled from "styled-components";
import theme from "../../../../theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  background-color: ${theme.COLOR.WHITE};
  width: 220px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  border: ${(props) => (props.theme === theme.darkTheme ? "" : "2px solid #f5f6f9")};
  box-shadow: ${(props) => (props.theme === theme.lightTheme ? "0 0  25px -7px rgba(173,173,173,0.3)" : "")};

  color: ${(props) => (props.theme === theme.darkTheme ? "black" : theme.lightTheme.textColor)};

  &:hover {
    box-shadow: ${(props) =>
      props.theme === theme.darkTheme ? `0 0 18px 2px ${theme.COLOR.GRAY}` : "0 0  25px -7px rgba(173,173,173,0.75)"};
    transform: scale(1.02);
    transition: all 600ms ease-in-out 0s;
  }

  p {
    font-family: ${theme.FONT.PRETENDARD_MEDIUM};
    color: ${theme.COLOR.GRAY};
    letter-spacing: 0.9px;
    margin-bottom: 30px;
    font-size: 16px;
  }

  h3 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    font-size: 35px;
    letter-spacing: 0.9px;
  }

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 200px;
    height: 190px;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    width: 180px;
    height: 160px;
    p {
      font-size: 14px;
    }

    h3 {
      font-size: 29px;
    }
  }
`;

export { Container };
