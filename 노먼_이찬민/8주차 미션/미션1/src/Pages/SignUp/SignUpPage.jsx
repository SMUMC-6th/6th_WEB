import React, { useEffect, useState } from "react";
import * as S from "./SignUpPage.style";
import InputContainer from "./Components/InputContainer";
import { useNavigate } from "react-router-dom";
import { usePostVerify } from "../../Hooks/usePostVerify";

// 반복되는 것 -> hook or components
// hoook 에서 인풋 onblur이벤트로 유효성 검사
// props 전달한 거 받을 때 매개변수단에서 구조분해할당이 ({})처럼 쓰는 거임.

export default function SignUpPage() {
  const navigate = useNavigate();
  // pw 재검사할 때 사용하려고 상태로 저장한거임.
  const [passwordValue, setPasswordValue] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  // 각 컴포넌트에서 검사해서 맞으면 자신 type 자리에 false, 아니면 true
  const [errorInputs, setErrorInputs] = useState({
    names: 1,
    username: 1,
    email: 1,
    age: 1,
    password: 1,
    passwordCheck: 1,
  }); // 1이면 오류, 0이면 통과

  const [inputValue, setInputValue] = useState({
    name: "",
    username: "",
    email: "",
    age: "",
    password: "",
    passwordCheck: "",
  });

  // post 하고 나서 로컬스토리지에 반환값저장
  const { token, isLoading } = usePostVerify({
    type: "signup",
    name: inputValue.name,
    username: inputValue.username,
    email: inputValue.email,
    age: inputValue.age,
    password: inputValue.password,
    passwordCheck: inputValue.passwordCheck,
  }); // type, name, email, age, username, password, passwordCheck
  if (token) {
    setIsPosting(false);
    navigate("/login");
  }

  // 에러 인풋 수 합 == 0이면 제출버튼활성화
  useEffect(() => {
    let sum = 0;
    for (const key in errorInputs) {
      sum = sum + errorInputs[key];
    }
    if (sum === 0) setSubmitButtonDisable(false);
  }, [errorInputs]);

  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);

  const goToLogin = (e) => {
    e.preventDefault();
    console.log(e.target["username"].value);
    setInputValue({
      name: e.target["name"].value,
      email: e.target["email"].value,
      age: e.target["age"].value,
      username: e.target["username"].value,
      password: e.target["password"].value,
      passwordCheck: e.target["passwordCheck"].value,
    });
    setIsPosting(true);
  };

  // errorInputs 셋 함수를 컴포넌트마다 전달해서, 자기 자신 컴포넌트가 조건 만족하면 현재값에서 -1
  return (
    <S.Container>
      <S.Header>회원가입 페이지</S.Header>
      <S.FormContainer onSubmit={goToLogin}>
        <InputContainer
          type="name"
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          type="username"
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          type="email"
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          type="age"
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          type="password"
          setPasswordValue={setPasswordValue}
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          type="passwordCheck"
          passwordValue={passwordValue}
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <S.FormButton disabled={submitButtonDisable}>제출하기</S.FormButton>
      </S.FormContainer>
      <S.TrailerContainer>
        <S.TrailerLeft>이미 아이디가 있으신가요?</S.TrailerLeft>
        <S.TrailerToLoginPageLink to={"/login"}>
          로그인 페이지로 돌아가기
        </S.TrailerToLoginPageLink>
      </S.TrailerContainer>
    </S.Container>
  );
}
