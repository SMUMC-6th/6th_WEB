import styled from 'styled-components';

const Container = styled.div `
  width: 100%;
  height: 100vh;

  display: flex;
`;

const postBox = styled.div`
  background-color: #ff7d83;

  width: 40%;
  height: 50%;
  border-radius: 5px;

  h1 {
    color: white;
    font-weight: bold;
  }
`;

export {Container, postBox}