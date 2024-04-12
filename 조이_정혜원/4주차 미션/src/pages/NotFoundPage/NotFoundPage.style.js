import { styled, keyframes } from "styled-components";
import { AiFillAlert } from "react-icons/ai";

const changeColor = keyframes`
    0% {
        color : white;
    }
    100% {
       color: red;
    }
`;

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    letter-spacing: 3px;
    margin: 10px 0;
  }

  p {
    font-style: italic;
    margin: 7px 0 25px;
    color: rgb(255, 255, 255, 0.8);
  }

  a {
    letter-spacing: 2px;
    text-decoration: none;
    color: rgb(255, 255, 255, 0.5);

    &:hover {
      cursor: pointer;
      color: white;
    }
  }
`;

const Icon = styled(AiFillAlert)`
  width: 30px;
  height: 30px;

  animation: ${changeColor} 350ms 0s infinite linear alternate;
`;

export { Container, Icon };
