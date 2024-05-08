import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-height: 600px;

  p {
    font-size: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  max-height: 600px;

`;

const Box = styled.div`
  background-color: #313362;
  width: 200px;
  height: 300px;
  border-radius: 5px; 

  img {
    width: 100%; 
    height: 78%;
    margin-bottom: 10px;
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-size: 15px;
    padding-left: 10px;
  }
`;

export {Container, Content, Box}