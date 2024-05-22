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

  margin-top: 40px;

  p {
    font-size: 20px;
    color: white;
  }

`;

const Box = styled.div`
  width: 80%;
  padding: 40px;
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  input {
    width: 400px;
    height: 40px;
    padding: 15px;

    border-radius: 25px;
    border: none;
  }

  button {
    width: 400px;
    height: 50px;
    margin: 20px;

    border-radius: 25px;
    border: none;

    cursor: pointer;
  }

  button:hover {
    background-color: #FEC622;
  }

  p {
    font-size: 13px;
  }

`;

const StyledLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  transition: color 0.3s;
`;

export { Container, Box, StyledLink }