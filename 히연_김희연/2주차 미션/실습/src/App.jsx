import React, { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [id, setId] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== "") {
      setTodoItems((prev) => [
        ...prev,
        {
          id: id,
          content: content,
        },
      ]);
      setId((prev) => prev + 1);
      setContent("");
    }
  };

  const handleCompleted = (item, list) => {
    if (item) {
      if (list === "todoItems") {
        setTodoItems(todoItems.filter((i) => i !== item));
        setDoneItems((prev) => [...prev, item]);
      } else {
        setDoneItems(doneItems.filter((i) => i !== item));
      }
    }
  };

  return (
    <div className="container">
      <h1>UMC Study Plan</h1>
      <hr />
      <div className="main">
        <form onSubmit={onSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="스터디 계획을 작성해보세요!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
        <div className="list">
          <div className="todo">
            <h4 className="todo-title">해야 할 일</h4>
            <hr />
            <div className="todo-items">
              {todoItems.map((todo, idx) => (
                <div key={idx}>
                  {todo.content}
                  <button onClick={() => handleCompleted(todo, "todoItems")}>
                    완료
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="done">
            <h4 className="done-title">해낸 일</h4>
            <hr />
            <div className="done-items">
              {doneItems.map((done, idx) => (
                <div key={idx}>
                  {done.content}
                  <button onClick={() => handleCompleted(done, "doneItems")}>
                    삭제
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
