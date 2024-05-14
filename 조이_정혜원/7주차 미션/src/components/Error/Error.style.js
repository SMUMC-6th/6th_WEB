import { styled } from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  height: 750px;

  ${theme.ALIGN.GRID_CENTER};
`;

const Wrapper = styled.div`
  color: #fff;

  ${theme.ALIGN.GRID_CENTER};

  p {
    margin-bottom: 20px;
  }

  button {
    border: none;
    border-radius: 5px;
    font-size: 12px;
    height: 25px;
    width: 110px;

    &:hover {
      cursor: pointer;
      transform: scale(0.95);
    }
  }
`;

export { Container, Wrapper };
