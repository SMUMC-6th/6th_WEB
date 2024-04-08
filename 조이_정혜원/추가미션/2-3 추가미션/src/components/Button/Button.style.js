import { styled } from "styled-components";

const ButtonBox = styled.button`
  margin: 10px;

  width: 70px;
  height: 30px;

  border: none;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${(props) => props.color};

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }
`;

export { ButtonBox };
