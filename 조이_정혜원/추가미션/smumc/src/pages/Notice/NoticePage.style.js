import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  color: inherit;
  height: 100%;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 150vh;

  h1 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    opacity: 0.9;
    margin-bottom: 80px;
  }
`;

export { Container, Wrapper };
