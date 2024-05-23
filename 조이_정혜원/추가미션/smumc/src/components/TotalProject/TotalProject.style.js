import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 20px;
  border-radius: 30px;
  padding: 10px 20px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { Container };
