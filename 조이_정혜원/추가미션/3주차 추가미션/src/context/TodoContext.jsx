import { createContext, useState } from "react";

// 데이터 담고 있음
export const TodoContext = createContext();

// 우산 만듬
export function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text === "") {
      alert("할 일을 입력하세요 !");
      return;
    }
    setTodoList((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 100 + 2),
        task: text,
      },
    ]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updateText) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: updateText,
            }
          : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        text,
        setText,

        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
