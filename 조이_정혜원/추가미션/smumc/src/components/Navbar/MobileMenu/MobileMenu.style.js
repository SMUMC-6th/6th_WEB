import styled from "styled-components";
import theme from "../../../theme";
import { GrFormClose } from "react-icons/gr";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: fixed;
  top: ${(props) => (props.$isOpen ? "0" : "-100%")};
  transition: all 850ms ease-in-out;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.9;
  z-index: 9999;

  a {
    font-size: 1.2rem;
    ${theme.ALIGN.ROW_CENTER};
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 20%;
    letter-spacing: 1.7px;

    &:hover {
      color: #fff;
    }

    &.active {
      color: #fff;
    }
  }

  hr {
    width: 40px;
    color: inherit;
  }

  div {
    ${theme.ALIGN.ROW_CENTER};
    width: 100%;
    height: 20%;
  }
`;

const Close = styled(GrFormClose)`
  color: inherit;
  width: 25px;
  height: 25px;
  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;

export { Container, Close };
