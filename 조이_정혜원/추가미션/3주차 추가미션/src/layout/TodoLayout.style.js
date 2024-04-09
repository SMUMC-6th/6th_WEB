import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  width: 500px;
  height: 500px;

  background-color: azure;
`;

const OutletWrapper = styled.div`
  flex: 1;
  height: 75%;
`;

export { Container, Content, OutletWrapper };
