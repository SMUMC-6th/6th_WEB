import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const TodoItemContainer = styled.li`
  width: 90%;
  height: 10%;
  margin-top: 15px;
  border-radius: 10px;
  box-shadow: 5px;
  background-color: aliceblue;
`;

const TodoText = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TodoInputContainer = styled.div``;

const TodoInuput = styled.input``;

const TodoCheckIcon = styled(FaCheck)``;

const TodoButtonContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TodoButton = styled.button``;

export {
  TodoItemContainer,
  TodoText,
  TodoButtonContainer,
  TodoButton,
  TodoInputContainer,
  TodoInuput,
  TodoCheckIcon,
};
