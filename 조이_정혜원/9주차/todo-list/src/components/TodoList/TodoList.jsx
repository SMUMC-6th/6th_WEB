import { useSelector } from "react-redux";
import * as S from "./TodoList.style";
import Todo from "./Todo/Todo";

const TodoList = () => {
  const todolist = useSelector((state) => state.todo);

  return (
    <S.Container>
      {todolist.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </S.Container>
  );
};

export default TodoList;
