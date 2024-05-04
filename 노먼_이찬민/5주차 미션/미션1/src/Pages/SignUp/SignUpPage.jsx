import React, { useEffect, useState } from "react";
import * as S from "./SignUpPage.style";
import InputContainer from "./Components/InputContainer";

export default function SignUpPage() {
  const [passwordValue, setPasswordValue] = useState("");
  const [errorInputs, setErrorInputs] = useState(5);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);

  useEffect(() => {
    if (errorInputs === 0) {
      setSubmitButtonDisable(false);
    } else {
      setSubmitButtonDisable(true);
    }
  }, [errorInputs]);

  // errorInputs 셋 함수를 컴포넌트마다 전달해서, 자기 자신 컴포넌트가 조건 만족하면 현재값에서 -1
  return (
    <S.Container>
      <S.Header>회원가입 페이지</S.Header>
      <S.FormContainer>
        <InputContainer typeIndex={0}></InputContainer>
        <InputContainer typeIndex={1}></InputContainer>
        <InputContainer typeIndex={2}></InputContainer>
        <InputContainer
          typeIndex={3}
          setPasswordValue={setPasswordValue}
        ></InputContainer>
        <InputContainer
          typeIndex={4}
          passwordValue={passwordValue}
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
