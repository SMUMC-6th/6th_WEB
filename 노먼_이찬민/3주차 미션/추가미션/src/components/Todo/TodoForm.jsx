import * as S from "./TodoForm.style";
import { FaPlus } from "react-icons/fa";
function TodoForm(props) {
  const { setTodos, formText, setFormText } = props;

  // todoform으로 옮기기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100 + 2), task: formText },
    ]);
  };

  // todoform으로 옮기기
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formText === "") {
      alert("할 일을 입력하세요.");
      return;
    }
    addTodo();
    setFormText("");
  };

  const handleChange = (e) => {
    setFormText(e.target.value);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.InputContainer>
        <S.Input
          type="text"
          value={formText}
          onChange={handleChange}
          placeholder="할 일을 입력하세요!"
        ></S.Input>
      </S.InputContainer>
      <S.SubmitButton type="submit">
        <FaPlus />
      </S.SubmitButton>
    </S.FormContainer>
  );
}

export default TodoForm;
