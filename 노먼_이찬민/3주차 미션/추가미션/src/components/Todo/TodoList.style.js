import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import TodoItem from "./TodoItem";

const TodoItemContainer = styled.div`
  width: 90%;
  height: 70%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  overflow-y: auto;
`;

const TodoNode = styled(TodoItem)`
  width: 100%;
  height: 20%;
`;

export { TodoItemContainer, TodoNode };
