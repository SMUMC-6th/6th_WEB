import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 0 20px;
  input {
    border: none;
    border-bottom: 1px solid #9c9a9a;
    width: 230px;
    height: 30px;
    margin-right: 2px;
    &:placeholder-shown {
      font-style: italic;
    }
  }
`;

const ItemWrapper = styled.div`
  height: 370px;
  width: 310px;
  overflow-y: auto;
`;

const AddIcon = styled(FaPlus)`
  height: 30px;
  margin: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;

export { Container, InputWrapper, ItemWrapper, AddIcon };
