import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  width: 100%;
  height: 100%;
  background-color: #88cfc6;
`;

export { Container, Wrapper };
