import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contetn: center;
  align-items: center;

  width: 100px;
  height: 100px;

  p {
    font-size: 10px;
    margin-top: 10px;
    opacity: 0.8;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    opacity: 1;
  }
`;

export {Container}