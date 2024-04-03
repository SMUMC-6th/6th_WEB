import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  //입력 필드의 변경 사항을 감지
  const onChange = (e) => setTodo(e.target.value);

  //이벤트를 처리하는 함수
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo('');
  };

  //완료 버튼을 클릭할 때 처리하는 함수
  const handleDone = (idx) => {
    const doneItem = todos[idx];
    setDoneItems((prevDoneItems) => [...prevDoneItems, doneItem]);
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== idx));
  };

  //삭제 버튼을 클릭할 때 처리하는 함수
  const handleDelete = (idx) => {
    setDoneItems((prevDoneItems) => prevDoneItems.filter((_, index) => index !== idx));
  };

  return (
    <div className='container'>
      <h1>UMC Study Plan</h1>
      <hr />
      <div className='todo-container'> 
      <form id="todo-form" onSubmit={onSubmit}>
        <input id="todo-input" onChange={onChange} value={todo} type="text" placeholder="UMC 스터디 계획을 작성해주세요!" />
      </form>
      
      <div className="todo">
        <div id="todo">
          <h2>해야 할 일</h2>
          <ul>
            {todos.map((item, idx) => (
              <li key={idx}>
                {item}
                <button onClick={() => handleDone(idx)}>완료</button>
              </li>
            ))}
          </ul>
        
        </div>
      <div id="done">
        <h2>해낸 일</h2>
        <ul>
          {doneItems.map((item, idx) => (
            <li key={idx}>
              {item}
              <button onClick={() => handleDelete(idx)}>삭제</button>
            </li>
          ))}
        </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
