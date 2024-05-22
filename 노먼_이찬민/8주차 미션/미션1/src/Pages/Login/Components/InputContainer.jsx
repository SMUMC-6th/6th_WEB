import React, { useEffect } from "react";
import * as S from "./InputContainer.style";
import { useState } from "react";

// typeIndex 0 1 2 3 4 순서대로 이름 이메일 나이 비밀번호 비밀번호확인의 컴포넌트임을 의미
export default function InputContainer(props) {
  const { type, errorInputs, setErrorInputs } = props;
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const placeholder = {
    username: "아이디를 입력하세요",
    password: "비밀번호를 입력하세요",
  };
  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{4,12}$/;

  const idValidCheck = (username) => {
    setInputValue({ ...inputValue, username: username });
    if (username === "") {
      setErrorInputs({ ...errorInputs, username: 1 });
      setErrorMessage("아이디를 입력해주세요!");
    } else {
      setErrorInputs({ ...errorInputs, username: 0 });
      setErrorMessage("");
    }
  };

  const passwordValidCheck = (pw) => {
    setInputValue({ ...inputValue, password: pw });
    if (pw.length < 4) {
      setErrorInputs({ ...errorInputs, password: 1 });
      setErrorMessage("비밀번호는 4자리 이상입니다.");
    } else if (pw.length > 12) {
      setErrorInputs({ ...errorInputs, password: 1 });
      setErrorMessage("비밀번호는 12자리 이하입니다.");
    } else if (passwordPattern.test(pw) === false) {
      setErrorInputs({ ...errorInputs, password: 1 });
      setErrorMessage(
        "비밀번호는 영어,숫자,특수문자가 모두 포함되어야 합니다."
      );
    } else {
      setErrorInputs({ ...errorInputs, password: 0 });
      setErrorMessage("");
    }
  };

  const handlerList = {
    username: idValidCheck,
    password: passwordValidCheck,
  };

  const onChangeValidChecker = (e) => {
    handlerList[type](e.target.value);
  };

  return (
    <S.InputContainer>
      <S.InputBox
        name={type}
        type={type == "password" ? "password" : "text"}
        placeholder={placeholder[type]}
        defaultValue={inputValue[type]}
        onChange={onChangeValidChecker}
      ></S.InputBox>
      {errorInputs[type] === 1 && (
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      )}
    </S.InputContainer>
  );
}
