import styled from "styled-components";
import theme from "../../../theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}

  h1 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    letter-spacing: 2px;
    margin-bottom: 80px;
    opacity: 0.9;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;

  @media screen and (max-width: 768px) {
    gap: 50px;
  }
`;

export { Container, Wrapper };
