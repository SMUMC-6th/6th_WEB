import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 12%;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;

  width: 100px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;

export { Container, Button };
