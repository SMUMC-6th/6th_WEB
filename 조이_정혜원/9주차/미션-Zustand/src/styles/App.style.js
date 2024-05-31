import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: rgb(242, 242, 242);
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 786px;
  min-height: 100vh;
  width: 100%;
  height: 100%;

  background-color: #fff;
`;

export { Container, Content };
