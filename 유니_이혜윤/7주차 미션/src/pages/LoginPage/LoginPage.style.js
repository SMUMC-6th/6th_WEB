import styled from "styled-components";

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
    width: 300px;
    height: 50px;
    padding: 15px;

    border-radius: 25px;
    border: none;
  }

  button {
    width: 300px;
    height: 40px;
    margin: 20px;

    border-radius: 25px;
    border: none;

    cursor: pointer;
  }

  p {
    font-size: 13px;
  }

`;

export {Container, Box}