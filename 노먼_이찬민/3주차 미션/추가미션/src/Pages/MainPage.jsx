import React from "react";
import { useState } from "react";
import TodoItem from "../components/Todo/TodoItem";
import TodoForm from "../components/Todo/TodoForm";
import * as S from "./MainPage.style";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainPage() {
  const [todos, setTodos] = useState([{ id: 1, task: "react" }]);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  // 객체 배열 상태를 가지고 map 순회로 필요한 정보들을 -> 원하는 컴포넌트 형태들의 배열로 변환하기
  return (
    <S.MainPageContainer>
      <Navbar />
      <TodoForm
        todos={todos}
        text={text}
        onSubmit={handleSubmit}
        inputOnChange={text}
      />
      <S.TodoItemContainer>
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id} id={todo.id} task={todo.task} text={text} />
          );
        })}
      </S.TodoItemContainer>
      <Footer />
    </S.MainPageContainer>
  );
}

export default MainPage;
