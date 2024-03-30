import React, { useState } from 'react';
import './todolist.css';
import TodoList from './TodoList.jsx'

function App() {
  const [todos, setTodos] = useState([]); // 할 일 목록 저장
  const [doneTodos, setDoneTodos] = useState([]); // 완료된 목록 저장
  const [input, setInput] = useState(''); // 사용자 입력 텍스트 저장

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, input]);  // 입력값 todo배열에 추가
    setInput('');  // 입력 필드 초기화
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    const doneItem = newTodos.splice(index, 1)[0]; // 항목 삭제
    setTodos(newTodos); // 상태 업데이트
    setDoneTodos([...doneTodos, doneItem]); // doneTodos 배열에 추가
  };

  const handleDelete = (index) => {
    const newDoneTodos = [...doneTodos];
    newDoneTodos.splice(index, 1); // 항목 삭제
    setDoneTodos(newDoneTodos); // 상태 업데이트
  };

  return (
    <div className="container">
      <h1>UMC Study Plan</h1>
      <hr />

      <div className="todo-container">
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            id="todo-input"
            type="text"
            placeholder="스터디 계획을 작성해보세요!"
            value={input}
            onChange={handleInputChange}
          />
        </form>

        <TodoList
          todos={todos}
          doneTodos={doneTodos}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />

      </div>
    </div>
  );
}

export default App;
