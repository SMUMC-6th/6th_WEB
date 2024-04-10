import { createContext, useRef, useState } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const idRef = useRef(0);
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") {
      alert("할 일을 입력하세요 !");
      return;
    }
    setTodoList((prev) => [
      ...prev,
      {
        id: idRef.current++,
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
