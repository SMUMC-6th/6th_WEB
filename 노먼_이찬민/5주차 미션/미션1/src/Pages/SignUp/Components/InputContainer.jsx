import React, { useEffect } from "react";
import * as S from "./InputContainer.style";
import { useState } from "react";

// typeIndex 0 1 2 3 4 순서대로 이름 이메일 나이 비밀번호 비밀번호확인의 컴포넌트임을 의미
export default function InputContainer(props) {
  const { typeIndex, passwordValue, setPasswordValue } = props;
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState(typeIndex === 2 ? 0 : "");
  const placeholder = [
    "이름을 입력하세요",
    "이메일을 입력하세요",
    "나이를 입력하세요",
    "비밀번호를 입력하세요",
    "비밀번호 확인",
  ];
  const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{4,12}$/;
  useEffect(() => {
    setErrorMessage("");
    setIsError(false);
    setInputValue("");
  }, []);

  const nameValidCheck = (name) => {
    // 원래 이렇게 썼는데, 이렇게하면 setInputValue와 nameValidcheck가 비동기적으로 실행되면서 nameValidCheck가 먼저 실행됨...
    // setInputValue(e.target.value);
    // nameValidCheck(inputValue);
    if (/^[a-zA-Z가-힣]+$/.test(name) === false) {
      setIsError(true);
      setErrorMessage("이름을 문자열로 입력해주세요.");
    } else if (name === "") {
      setIsError(true);
      setErrorMessage("이름을 입력해주세요!");
    } else {
      setIsError(false);
      setErrorMessage("");
    }
  };

  const emailValidCheck = (email) => {
    if (emailPattern.test(email) === false) {
      setIsError(true);
      setErrorMessage("올바른 이메일 형식이 아닙니다.");
    } else {
      setIsError(false);
      setErrorMessage("");
    }
  };
  const ageValidCheck = (age) => {
    if (Number.isNaN(age) === true) {
      setIsError(true);
      setErrorMessage("나이는 숫자 형식이어야 합니다.");
    } else if (age < 0) {
      setIsError(true);
      setErrorMessage("나이는 음수가 될 수 없습니다.");
    } else if (age.includes(".") === true) {
      setIsError(true);
      setErrorMessage("나이는 소수가 될 수 없습니다.");
    } else if (age < 19) {
      setIsError(true);
      setErrorMessage("미성년자는 가입할 수 없습니다.");
    } else {
      setIsError(false);
      setErrorMessage("");
    }
  };
  const passwordValidCheck = (pw) => {
    setPasswordValue(pw);
    if (pw.length < 4) {
      setIsError(true);
      setErrorMessage("비밀번호는 4자리 이상입니다.");
    } else if (pw.length > 12) {
      setIsError(true);
      setErrorMessage("비밀번호는 12자리 이하입니다.");
    } else if (passwordPattern.test(pw) === false) {
      setIsError(true);
      setErrorMessage(
        "비밀번호는 영어,숫자,특수문자가 모두 포함되어야 합니다."
      );
    } else {
      setIsError(false);
      setErrorMessage("");
    }
  };
  const passwordDoubleValidCheck = (pwDouble) => {
    console.log(pwDouble, passwordValue);
    if (pwDouble !== passwordValue) {
      setIsError(true);
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setIsError(false);
      setErrorMessage("");
    }
  };
  // 인풋컨테이너에 들어오는 타입에 매칭시켜서 각 컴포넌트별로 onchange Listener들 중 하나만 실행해야함
  const handlerList = [
    nameValidCheck,
    emailValidCheck,
    ageValidCheck,
    passwordValidCheck,
    passwordDoubleValidCheck,
  ];

  const onChangeValidChecker = (e) => {
    handlerList[typeIndex](e.target.value);
  };

  return (
    <S.InputContainer>
      <S.InputBox
        type={typeIndex == 3 || typeIndex == 4 ? "password" : "text"}
        placeholder={placeholder[typeIndex]}
        // defaultValue={inputValue} 없어도 됨
        onChange={onChangeValidChecker}
      ></S.InputBox>
      {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
}
