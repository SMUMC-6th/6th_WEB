import { useContext, useState } from "react";
import { TodoContext } from "../../../context/TodoContext";
import * as S from "./TodoItem.style";

const TodoItem = ({ todo }) => {
  const { id, task } = todo;
  const { deleteTodo, updateTodo } = useContext(TodoContext);
  const [isEdit, setIsEdit] = useState(false);
  const [updateText, setUpdateText] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") handleChange();
  };

  const handleChange = () => {
    if (updateText.trim() === "") {
      alert("변경을 원하지 않으시면 취소를 눌러주세용");
      return;
    }
    updateTodo(id, updateText);
    setIsEdit((prev) => !prev);
    setUpdateText("");
  };

  return (
    <S.Container>
      {isEdit ? (
        <form onSubmit={(e) => e.preventDefault()} onKeyPress={handleEnter}>
          <S.UpdateWrapper>
            <input
              defaultValue={task}
              onChange={(e) => setUpdateText(e.target.value)}
              autoFocus
            />
            <S.Icon onClick={() => handleChange()} />
          </S.UpdateWrapper>
        </form>
      ) : (
        <p>{task}</p>
      )}
      <S.ButtonBox>
        {isEdit ? (
          <button onClick={() => setIsEdit((prev) => !prev)}>취소</button>
        ) : (
          <button onClick={() => setIsEdit((prev) => !prev)}>변경</button>
        )}
        <button role="button" onClick={() => deleteTodo(id)}>
          삭제
        </button>
      </S.ButtonBox>
    </S.Container>
  );
};

export default TodoItem;
