import { useRef, useState } from "react";
import Todos from "./components/Todos";

import "./App.css";

function App() {
  const [content, setContent] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [doneItmes, setDoneItmes] = useState([]);

  const id = useRef(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodoItems((prev) => [
      ...prev,
      {
        id: id.current,
        content: content,
      },
    ]);
    id.current++;
    setContent("");
  };

  const handleCompleted = (item) => {
    setTodoItems(todoItems.filter((i) => i !== item));
    setDoneItmes((prev) => [...prev, item]);
  };

  const handleRemove = (item) => {
    setDoneItmes(doneItmes.filter((i) => i !== item));
  };

  return (
    <div className="container">
      <h1>UMC Study Plan</h1>
      <hr />

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder=" UMC 스터디 계획을 작성해보세요!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
      <div className="todo-container">
        <Todos
          completed={false}
          items={todoItems}
          handleCompleted={handleCompleted}
        />
        <Todos
          completed={true}
          items={doneItmes}
          handleCompleted={handleRemove}
        />
      </div>
    </div>
  );
}

export default App;
