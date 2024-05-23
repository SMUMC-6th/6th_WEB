import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import theme from "../../../styles/theme";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? "0" : "-100%")};
  transition: all 850ms ease-in-out;
  background-color: black;
  opacity: 0.9;
  width: 100%;
  height: 100vh;
  z-index: 999;

  a {
    ${theme.ALIGN.ROW_CENTER};
    text-decoration: none;
    color: rgb(242, 245, 255, 0.8);
    width: 100%;
    height: 10%;

    &:hover {
      cursor: pointer;
      background-color: rgb(242, 245, 255, 0.9);
      color: black;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 10%;
  }
`;

const CloseMenu = styled(GrFormClose)`
  color: rgb(242, 245, 255, 0.8);
  width: 25px;
  height: 25px;
  margin-right: 20px;

  &:hover {
    color: #fff;
  }
`;

export { Container, CloseMenu };
