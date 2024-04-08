import { styled } from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgb(0, 0, 0, 0.5);

  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 200px;
  border-radius: 5px;

  background-color: white;

  h2 {
    margin-bottom: 10px;
  }
`;

export { Container, Wrapper };
