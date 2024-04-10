import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -60px;
`;

const Input = styled.form`
  display: flex;
  align-items: center;
  margin: 20px;
  input {
    border: 2px dashed cornflowerblue;
    border-radius: 10px;
    background-color: transparent;
    width: 400px;
    height: 45px;
  }
`;

const Item = styled.div`
  height: 350px;
  width: 380px;
  overflow-y: auto;
`;

const AddIcon = styled(FaPlus)`
  height: 30px;
  margin: 4px;
  color: cornflowerblue;
  &:hover {
    cursor: pointer;
  }
`;

export { Container, Input, Item, AddIcon };
