import { useContext } from "react";
import * as S from "./Todo.style";
import TodoItem from "./TodoItem/TodoItem";
import { TodoContext } from "../../context/TodoContext";

const Todo = () => {
  const { todoList, text, setText, addTodo } = useContext(TodoContext);

  const enter = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <S.Container>
      <form onSubmit={(e) => e.preventDefault()} onKeyDown={enter}>
        <S.InputWrapper>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="새로운 할 일을 입력하세요"
          />
          <S.AddIcon onClick={addTodo} />
        </S.InputWrapper>
      </form>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </S.Container>
  );
};

export default Todo;
