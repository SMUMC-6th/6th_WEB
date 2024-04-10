import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  border: 2px dashed cornflowerblue;
  border-radius: 10px;
  background-color: transparent;
  width: 400px;
  height: 45px;
  &:hover {
    cursor: pointer;
  }
`;

export { Container, Button };
