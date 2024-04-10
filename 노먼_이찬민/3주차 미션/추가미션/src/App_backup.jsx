import React from "react";
import { useState } from "react";

function MainPage2() {
  const [todo, setTodo] = useState([{ id: 1, tasks: "react" }]);
  const [text, setText] = useState("");
  // const [isEditing, setIsEditing] = useState(false);
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
    <div className="App">
      <Navbar />
      <form onSubmit={handleSubmit}>
        {/* value는 인풋 내부의 문자열을 나타내는 속성 => event.target.value */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button role="button">입력</button>
      </form>
      {/* div -> TodoList, map의 div-> TodoItem */}
      <div>
        {todo.map((item) => (
          <div key={item.id}>
            {editId === item.id ? (
              <input
                type="text"
                defaultValue={item.tasks}
                onChange={(e) => setEditText(e.target.value)}
              ></input>
            ) : (
              <div>{item.tasks}</div>
            )}
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
            {editId === item.id ? (
              <button onClick={() => updateTodo(editId, editText)}>
                수정 완료
              </button>
            ) : (
              <button onClick={() => setEditId(item.id)}>수정</button>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
