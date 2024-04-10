import * as S from "./TodoItem.style";
import { useState } from "react";

function TodoItem(props) {
  const { id, task, text, todos } = props; // 구조분해할당으로 props 받아오기
  // edit 버튼은 하나의 항목에 영향을 주기 때문에 하나마다 상태를 정의하기 위해 Item에 정의하기
  const [editId, setEditId] = useState();
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    setTodo((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100 + 2), tasks: text },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, tasks: updatedTodo } : item
      )
    );
    setEditId(null);
  };

  return (
    <S.TodoItemContainer>
      <S.TodoText>{text}</S.TodoText>
      <S.TodoInuput defaultValue={text}></S.TodoInuput>
      <S.TodoButtonContainer>
        <S.TodoButton>수정</S.TodoButton>
        <S.TodoButton>삭제</S.TodoButton>
      </S.TodoButtonContainer>
      {todos.map((item) => (
        <S.TodoItem
          key={item.id}
          id={item.id}
          onClick={() => setEditId(item.id)}
        >
          {item.tasks}
        </S.TodoItem>
      ))}
    </S.TodoItemContainer>
  );
}

export default TodoItem;
