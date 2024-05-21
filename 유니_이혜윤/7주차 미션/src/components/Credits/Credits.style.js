import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  
  width: 100%;
  height: 50%;

  margin: 50px;
`;

const Content = styled.div`
  width: 50%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 0px 30px;

`;

export { Container, Content }