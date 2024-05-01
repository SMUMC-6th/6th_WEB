import { useContext } from "react";
import * as S from "./Todo.style";
import { TodoContext } from "../../context/TodoContext";
import TodoItem from "./TodoItem/TodoItem";

const Todo = () => {
  const { todoList, text, setText, addTodo } = useContext(TodoContext);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (e.nativeEvent.isComposing) return;
      addTodo();
    }
  };

  return (
    <S.Container>
      <S.InputWrapper
        onSubmit={(e) => e.preventDefault()}
        onKeyDown={handleEnter}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=" 새로운 할 일을 입력하세요"
        />
        <S.AddIcon onClick={addTodo} />
      </S.InputWrapper>

      <S.ItemWrapper>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </S.ItemWrapper>
    </S.Container>
  );
};

export default Todo;
