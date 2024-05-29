import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  color: inherit;
  height: 100%;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100%;

  h1 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    opacity: 0.9;
    margin: 150px 0 80px;
  }
`;

export { Container, Wrapper };
