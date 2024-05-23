import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  height: 100%;
  width: 100%;

  ${theme.ALIGN.ROW_CENTER};
  img {
    width: 50px;
    height: 50px;
  }
`;

export { Container };
