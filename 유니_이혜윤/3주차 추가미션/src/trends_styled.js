import styled from "styled-components";

const Container = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 20px;
`;


const Box = styled.div`
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  margin: 7px;

  width: 70%;
`;

const Id = styled.div`
  width: 20%;

`;

const Title = styled.div`
  width: 80%;
  height: 50%;

`;

const Content = styled.div`
  width: 80%;
  height: 50%;
`;

export {Container, Box, Title, Id, Content}