import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TodoContext } from "../../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { id, task } = todo;
  const { deleteTodo, updateTodo } = useContext(TodoContext);
  const [isEdit, setIsEdit] = useState(false);
  const [updateText, setUpdateText] = useState("");

  const handleChange = () => {
    if (updateText === "") {
      alert("공백은 입력할 수 없습니다 !");
      return;
    }
    updateTodo(id, updateText);
    setIsEdit((prev) => !prev);
    setUpdateText("");
  };

  return (
    <div>
      {isEdit ? (
        <>
          <input
            defaultValue={task}
            onChange={(e) => setUpdateText(e.target.value)}
          />
          <FaCheck onClick={() => handleChange()} />
        </>
      ) : (
        <p>{task}</p>
      )}
      <button onClick={() => setIsEdit((prev) => !prev)}>변경</button>
      <button role="button" onClick={() => deleteTodo(id)}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
