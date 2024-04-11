import * as S from "./TodoList.style";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  // destructuring
  const { todos, setTodos } = props;

  return (
    <S.TodoItemContainer>
      {todos.map((item) => (
        <S.TodoNode
          key={item.id}
          id={item.id}
          content={item.task}
          todos={todos}
          setTodos={setTodos}
        ></S.TodoNode>
      ))}
    </S.TodoItemContainer>
  );
}

export default TodoList;
