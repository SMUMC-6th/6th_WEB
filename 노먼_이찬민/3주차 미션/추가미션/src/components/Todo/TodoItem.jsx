import React from "react";
import * as S from "./TodoItem.style";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const TodoItem = (props) => {
  // destructuring
  // mainpage todos를 여기까지 끌고와서 핸들링해야하네... 귀찮다 -> 컨텍스트?
  const { id, content, todos, setTodos } = props;

  // 상태 구분짓기 - 각 컴포넌트마다의 isEdit 사용
  const [editId, setEditId] = useState();
  const [editText, setEditText] = useState("");

  // id랑 content를 받아서 edit상태로 등록해 줌
  const onClickModify = (id, content) => {
    setEditId(id);
    setEditText(content);
  };
  // id랑 변경된 todo태스크를 setTodos로 재설정해 줌
  const onClickModifyComplete = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, task: updatedTodo } : item
      )
    );
    setEditId();
    setEditText("");
  };
  // id 받아서 setTodos로 filtering해버림 (item) => (조건)에서 조건 안맞으면 버림
  const onClickDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <S.Container>
      {!(editId === id) && <S.ContentWrapper>{content}</S.ContentWrapper>}
      {editId === id && (
        <S.InputContentWrapper>
          <S.InputContent
            defaultValue={editText}
            onChange={(e) => setEditText(e.target.value)}
          ></S.InputContent>
          <S.ModifySubmitButton
            onClick={() => onClickModifyComplete(id, editText)}
          >
            아이콘
            {console.log(editText, id)}
          </S.ModifySubmitButton>
        </S.InputContentWrapper>
      )}
      <S.ButtonContainer>
        <S.Button onClick={() => onClickModify(id, content)}>변경</S.Button>
        <S.Button onClick={() => onClickDelete(id)}>삭제</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default TodoItem;
