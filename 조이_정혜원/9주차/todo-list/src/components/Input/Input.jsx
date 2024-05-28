import { useDispatch } from "react-redux";
import * as S from "./Input.style";
import { useState } from "react";
import { add } from "../../redux/todo/todoSlice";

const Input = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("할 일을 입력해주세요 😡");
      return;
    }
    dispatch(add(text));
    setText("");
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="할 일을 입력하세용" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">+</button>
      </form>
    </S.Container>
  );
};

export default Input;
