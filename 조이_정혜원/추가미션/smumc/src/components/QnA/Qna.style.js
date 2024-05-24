import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 800px;
  margin-bottom: 80px;
  position: relative;

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 650px;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    width: 350px;
  }
`;

const LinkBox = styled.div`
  position: absolute;
  bottom: -20px;
  right: 15px;
  font-size: 12px;

  a {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    text-decoration: none;
    color: ${(props) => (props.theme === theme.darkTheme ? "#b1bfb0" : props.theme.primary)};
  }
`;

export { Container, LinkBox };
