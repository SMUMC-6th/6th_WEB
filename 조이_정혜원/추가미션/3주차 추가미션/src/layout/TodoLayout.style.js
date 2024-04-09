import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;

  background-color: rgb(0, 0, 0, 0.2);
`;

const Content = styled.div`
  width: 800px;
  height: 650px;

  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 20px 2px #a6a6a6;

  background-color: #fff;
`;

const OutletWrapper = styled.div`
  flex: 1;
  height: 75%;
`;

export { Container, Content, OutletWrapper };
