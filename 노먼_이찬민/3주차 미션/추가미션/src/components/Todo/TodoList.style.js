import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const TodoItemContainer = styled.div`
  width: 90%;
  height: 100%; // 추가함
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  overflow-y: auto;
`;

export { TodoItemContainer };
