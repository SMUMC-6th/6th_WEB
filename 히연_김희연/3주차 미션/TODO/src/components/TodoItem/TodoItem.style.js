import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px dashed cornflowerblue;
  border-radius: 10px;
  background-color: transparent;

  width: 300px;
  height: 35px;
  margin: 15px;
  padding: 10px;
  p {
    margin-left: 3px;
    font-size: 13px;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Update = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-left: 3px;
    margin-right: 4px;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    outline: none;
  }
`;

const Icon = styled(FaCheck)`
  color: cornflowerblue;
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.div`
  button {
    width: 35px;
    height: 22px;
    margin: 2px;
    border: 1px solid cornflowerblue;
    border-radius: 5px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }
`;

export { Container, Update, Icon, Button };
