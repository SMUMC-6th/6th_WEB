import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import * as S from "./TodoItem.style";

const TodoItem = ({ todo }) => {
  const { id, task } = todo;
  const { deleteTodo, updateTodo } = useContext(TodoContext);
  const [isEdit, setIsEdit] = useState(false);
  const [updateText, setUpdateText] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (e.nativeEvent.isComposing) return;
      handleChange();
    }
  };

  const handleChange = () => {
    if (updateText.trim() === "") {
      alert("변경사항이 없습니다.");
      return;
    }
    updateTodo(id, updateText);
    setIsEdit((prev) => !prev);
    setUpdateText("");
  };

  return (
    <S.Container>
      {isEdit ? (
        <form onSubmit={(e) => e.preventDefault()} onKeyDown={handleEnter}>
          <S.Update>
            <input
              defaultValue={task}
              onChange={(e) => setUpdateText(e.target.value)}
              autoFocus
            />
            <S.Icon onClick={() => handleChange()} />
          </S.Update>
        </form>
      ) : (
        <p>{task}</p>
      )}
      <S.Button>
        <button role="button" onClick={() => setIsEdit((prev) => !prev)}>
          {isEdit ? "취소" : "변경"}
        </button>
        <button role="button" onClick={() => deleteTodo(id)}>
          삭제
        </button>
      </S.Button>
    </S.Container>
  );
};

export default TodoItem;
