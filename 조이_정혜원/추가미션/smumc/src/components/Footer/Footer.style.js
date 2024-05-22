import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 170px;
  color: ${theme.COLOR.GRAY};
  background-color: ${(props) => props.theme.footerColor};
`;

const TextWrapper = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN}

  margin: 0 60px;

  div {
    display: flex;
    align-items: end;
  }

  h3 {
    font-family: "Pretendard-Bold";
    color: ${(props) => (props.theme === theme.darkTheme ? theme.COLOR.LIGHT_GREEN : theme.lightTheme.textColor)};
    font-size: 25px;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 11px;
    letter-spacing: 0.7px;
  }
`;

const IconWrapper = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN}

  margin: 30px 60px 0;

  p {
    font-size: 11px;
    letter-spacing: 0.7px;
  }

  div > svg {
    margin-right: 5px;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${theme.COLOR.LIGHT_GREEN};
      cursor: pointer;
    }

    svg {
      margin-left: 15px;
      width: 20px;
      height: 20px;
    }
  }
`;

const InfoWrapper = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-top: 3px;
  }
`;

export { Container, TextWrapper, IconWrapper, InfoWrapper };
