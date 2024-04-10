import { useState } from 'react';
import * as S from './App.style.js'
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function App() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
  };

  const addTodo = () => {
    if (!text.trim()) {
      alert('할 일을 입력하세요.');
      return;
    }

    setTodo((prevTodo) => [
      ...prevTodo,
      {id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodo((prev) =>
    prev.map((item) => item.id === id ? {...item, task: updatedTodo} : item)
    );
    setEditingId(null);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <h1>✏️ TODO LIST ✏️</h1>
      <S.InputBox>
        <input
          type='text'
          value={text} placeholder='새로운 할 일을 입력하세요'
          onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTodo()} role='button'><FaPlus color="black" style={{ backgroundColor: 'white' }}  /></button>
      </S.InputBox>

      <S.ContentBox>
        {todo.map((item) => (
          <S.Content key={item.id}>
            {editingId === item.id ? (
              <input defaultValue={item.task}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={(e) => {  // 수정하고 엔터누르면 수정완료 처리
                if (e.key === 'Enter') {
                  updateTodo(item.id, editText);
                }
              }}
              />
            ) : (
              <p>{item.task}</p>
            )}

            <S.ButtonContainer>
              {editingId === item.id ? (
                <button onClick={() => updateTodo(editingId, editText)}><FaCheck /></button>
              ) : (
                <button onClick={() => setEditingId(item.id)}>변경</button>
              )}

              <button onClick={() => deleteTodo(item.id)}>삭제</button>
            </S.ButtonContainer>
          </S.Content>
        ))}
      </S.ContentBox>
    </S.FormContainer>
  )
}

export default App;