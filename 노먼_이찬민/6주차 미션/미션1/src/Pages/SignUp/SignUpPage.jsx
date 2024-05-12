import React, { useEffect, useState } from "react";
import * as S from "./SignUpPage.style";
import InputContainer from "./Components/InputContainer";
import { useNavigate } from "react-router-dom";

// 반복되는 것 -> hook or components
// hoook 에서 인풋 onblur이벤트로 유효성 검사
// props 전달한 거 받을 때 매개변수단에서 구조분해할당이 ({})처럼 쓰는 거임.

export default function SignUpPage() {
  const [passwordValue, setPasswordValue] = useState("");
  // 각 컴포넌트에서 검사해서 맞으면 자신 type 자리에 false, 아니면 true

  const [errorInputs, setErrorInputs] = useState({
    names: 1,
    email: 1,
    age: 1,
    password: 1,
    passwordDouble: 1,
  }); // 1이면 오류, 0이면 통과
  useEffect(() => {
    let sum = 0;
    for (const key in errorInputs) {
      sum = sum + errorInputs[key];
    }
    console.log(sum);
    if (sum === 0) setSubmitButtonDisable(false);
  }, [errorInputs]);

  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);
  // console.log("submitButton" + submitButtonDisable);
  const navigate = useNavigate();
  const goToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  // errorInputs 셋 함수를 컴포넌트마다 전달해서, 자기 자신 컴포넌트가 조건 만족하면 현재값에서 -1
  return (
    <S.Container>
      <S.Header>회원가입 페이지</S.Header>
      <S.FormContainer onSubmit={goToLogin}>
        <InputContainer
          typeIndex={0}
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          typeIndex={1}
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          typeIndex={2}
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          typeIndex={3}
          setPasswordValue={setPasswordValue}
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          typeIndex={4}
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
