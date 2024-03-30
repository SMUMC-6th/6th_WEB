import React from 'react';

function TodoList({ todos, doneTodos, handleComplete, handleDelete }) {
  return (
    <div className='todo-done-container'>
      <div className="todo">
        <div id="todo-title">해야 할 일</div>
        <div id="todo-list">
          {todos.map((todo, index) => (
            <div key={index}>
              {todo}
              <button onClick={() => handleComplete(index)}>완료</button>
            </div>
          ))}
        </div>
      </div>

      <div className='done'>
        <div id="done-title">해낸 일</div>
        <div id="done-list">
          {doneTodos.map((doneTodo, index) => (
            <div key={index}>
              {doneTodo}
              <button onClick={() => handleDelete(index)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;