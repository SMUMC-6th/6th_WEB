import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: calc(100vh);
  background-color: #202140;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
  }

`;

const Box = styled.div`
  width: 80%;
  padding: 40px;
  gap: 33px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  input {
    width: 400px;
    height: 13px;
    padding: 15px;

    border-radius: 25px;
    border: none;
  }

  button {
    width: 420px;
    height: 50px;
    margin: 20px;

    border-radius: 25px;
    border: none;
  }

  p {
    font-size: 15px;
  }

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  transition: color 0.3s;
`;

export { Container, Box, StyledLink }