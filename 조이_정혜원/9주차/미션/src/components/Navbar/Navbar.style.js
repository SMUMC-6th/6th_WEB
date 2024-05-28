import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  padding: 0 50px;
  width: 100%;
  height: 55px;
  background-color: #f9f9f9;

  h1 {
    width: 65px;
    ${theme.ALIGN.ROW_SPACE_BETWEEN};
    font-size: 1rem;
    letter-spacing: 1.5px;
    svg {
      width: 17px;
      height: 17px;
      margin-bottom: 3px;
    }
  }
`;

const Icon = styled.div`
  position: relative;
  ${theme.ALIGN.ROW_CENTER};
  height: 100%;

  svg {
    width: 23px;
    height: 23px;
    opacity: 0.5;
  }

  p {
    position: absolute;
    top: 10px;
    right: -8px;
    ${theme.ALIGN.ROW_CENTER};
    background-color: rgb(255, 61, 103, 0.9);
    color: #fff;

    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 10px;
    font-weight: bold;
  }
`;

export { Container, Icon };
