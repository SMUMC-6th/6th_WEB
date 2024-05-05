import styled from "styled-components";
import "animate.css";

const Container = styled.div`
  background-color: #090b13;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 350px;

  p {
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;

    animation: jackInTheBox;
    animation-duration: 2s;
  }
`;

export { Container };
