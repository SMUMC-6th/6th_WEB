import styled from "styled-components";
import theme from "../../styles/theme";
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";

const Container = styled.div`
  display: grid;
  place-items: center;

  padding: 50px 0 40px;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);

  margin: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* @media all and (max-width: 479px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;

const ButtonBox = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 80px;
  p {
    width: 30px;
    text-align: center;
    color: #fff;
    font-size: 13px;
  }

  margin: 10px 0 50px;
`;

const IconBack = styled(IoChevronBackCircleOutline)`
  color: ${(props) => (props.disabled ? "black" : "#fff")};
  width: 17px;
  height: 17px;
`;

const IconForward = styled(IoChevronForwardCircleOutline)`
  color: #fff;
  width: 17px;
  height: 17px;
`;

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;

  &:hover {
    cursor: ${(props) => (props.disabled ? "" : "pointer")};
    transform: ${(props) => (props.disabled ? "" : "scale(1.05)")};
  }
`;

export { Container, MovieContainer, ButtonBox, IconBack, IconForward, Button };
