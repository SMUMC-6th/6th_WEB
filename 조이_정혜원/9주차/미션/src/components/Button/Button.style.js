import styled from "styled-components";

const Container = styled.button`
  font-weight: 500;
  border: none;
  padding: 10px 20px;
  font-size: 12px;
  letter-spacing: 1px;

  background-color: ${(props) => (props.$no ? "rgb(240, 105, 135)" : "")};
  color: ${(props) => (props.$no ? "#fff" : "")};

  &:hover {
    cursor: pointer;
    background-color: rgb(255, 61, 103, 0.9);
    color: #fff;
  }
`;

export { Container };
