import { useState } from "react";
import * as S from "./Todo.style";
import TodoItem from "./TodoItem/TodoItem";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text === "") {
      alert("할 일을 입력하세요 !");
      return;
    }
    setTodoList((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 100 + 2),
        task: text,
      },
    ]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updateText) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: updateText,
            }
          : todo
      )
    );
  };

  return (
    <S.Container>
      <form onSubmit={(e) => e.preventDefault()}>
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
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </S.Container>
  );
};

export default Todo;
