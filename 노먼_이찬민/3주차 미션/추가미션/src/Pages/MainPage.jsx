import React from "react";
import { useState } from "react";
import TodoItem from "../components/Todo/TodoList";
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";
import * as S from "./MainPage.style";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainPage() {
  // todos로 할 일 관리, formText로는 인풋창 관리
  const [todos, setTodos] = useState([{ id: 1, content: "react" }]);
  const [formText, setFormText] = useState("");

  // 객체 배열 상태를 가지고 map 순회로 필요한 정보들을 -> 원하는 컴포넌트 형태들의 배열로 변환하기
  return (
    <S.MainPageContainer>
      <TodoForm
        setTodos={setTodos}
        formText={formText}
        setFormText={setFormText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </S.MainPageContainer>
  );
}

export default MainPage;
