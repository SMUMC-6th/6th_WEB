import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  height: 50px;

  ${theme.ALIGN.ROW_CENTER};
  img {
    width: 50px;
    height: 50px;
  }
`;

export { Container };
