import styled from "styled-components";

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 30px;
`;

const Wrapper = styled.div`
  font-size: 14px;
  h1 {
    margin-bottom: 30px;
  }
`;


const Box = styled.div`
  display: flex;

  width: 400px;
  height: 40px;
  padding: 10px;
  margin: 7px;

  border: 2px solid;
  border-radius: 10px;


  p {
    font-weight: bold;
    margin: 3px 0 0 5px;
  }

  div {
    margin-top: 2px;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Content = styled.div`
  color: gray;
  padding-left: 10px;
`;

const ButtonWrapper = styled.div`
  margin: 20px;

  button {
    margin: 4px;
    border: none;
    border-radius: 6px;
  }
`;

export {Container, Wrapper, Box, Title, Content, ButtonWrapper}