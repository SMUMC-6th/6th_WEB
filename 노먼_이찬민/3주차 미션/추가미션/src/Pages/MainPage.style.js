import styled from "styled-components";
import { FaCheck, FaPlus } from "react-icons/fa";

const MainPageContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoItemContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: aliceblue;
`;

export { MainPageContainer, TodoItemContainer };
