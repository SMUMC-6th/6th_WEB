import React, { useEffect } from "react";
import * as S from "./InputContainer.style";
import { useState } from "react";

// typeIndex 0 1 2 3 4 순서대로 이름 이메일 나이 비밀번호 비밀번호확인의 컴포넌트임을 의미
export default function InputContainer(props) {
  const { typeIndex } = props;
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
  // console.log(placeholder[typeIndex]);
  useEffect(() => {
    setErrorMessage("");
    setIsError(false);
    setInputValue("");
  }, []);

  const nameValidCheck = (name) => {
    if (name === "") {
      setIsError(true);
      setErrorMessage("이름을 입력해주세요!");
    } else {
      setIsError(false);
      setErrorMessage("");
    }
  };

  const emailValidCheck = (email) => {};
  const ageValidCheck = () => {};
  const passwordValidCheck = () => {};
  const passwordDoubleValidCheck = () => {};

  // 입력창에서 onchange 이벤트 핸들링할때 입력값 추적하려면 e.target.value를 set 해주기
  const handlleNameValid = (e) => {
    // 원래 이렇게 썼는데, 이렇게하면 setInputValue와 nameValidcheck가 비동기적으로 실행되면서 nameValidCheck가 먼저 실행됨...
    // setInputValue(e.target.value);
    // nameValidCheck(inputValue);
    const newValue = e.target.value;
    setInputValue(newValue);
    nameValidCheck(newValue);
  };
  const handlleEmailValid = (e) => {};
  const handlleAgeValid = (e) => {};
  const handllePasswordValid = (e) => {};
  const handllePasswordDoubleValid = (e) => {};

  // 인풋컨테이너에 들어오는 타입에 매칭시켜서 각 컴포넌트별로 onchange Listener들 중 하나만 실행해야함
  const handlerList = [
    handlleNameValid,
    handlleEmailValid,
    handlleAgeValid,
    handllePasswordValid,
    handllePasswordDoubleValid,
  ];

  // input의 입력이 실시간으로 모니터링 되어야함 -> 상태값을 value로 사용 필요
  return (
    <S.InputContainer>
      <S.InputBox
        placeholder={placeholder[typeIndex]}
        defaultValue={inputValue}
        onChange={handlerList[typeIndex]}
      ></S.InputBox>
      {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      {!isError && <S.SuccessMessage></S.SuccessMessage>}
    </S.InputContainer>
  );
}
