import styled from "styled-components";
import theme from "../../styles/theme";
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";

const Container = styled.div`
  position: relative;
  ${theme.ALIGN.GRID_CENTER};

  padding: 50px 0 40px;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);

  margin: 20px;

  @media ${theme.SCREEN_SIZE.PC} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${theme.SCREEN_SIZE.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
  }
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
  color: ${(props) => (props.disabled ? "black" : "#fff")};
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

const LoadingContainer = styled.div`
  height: 750px;
  ${theme.ALIGN.ROW_CENTER}
`;

export { Container, MovieContainer, ButtonBox, IconBack, IconForward, Button, LoadingContainer };
