import React, { useState } from "react";
import * as S from "./SignUpPage.style";
import InputContainer from "./Components/InputContainer";

export default function SignUpPage() {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const placeholderOfName = "이름을 입력하세요";
  const placeholderOfEmail = "이메일을 입력하세요";
  const placeholderOfAge = "나이를 입력하세요";
  const placeholderOfPassword = "비밀번호를 입력하세요";
  const placeholderOfPasswordValid = "비밀번호 확인";

  return (
    <S.Container>
      <S.Header>회원가입 페이지</S.Header>
      <S.FormContainer>
        <InputContainer typeIndex={0}></InputContainer>
        <InputContainer></InputContainer>
        <InputContainer></InputContainer>
        <InputContainer></InputContainer>
        <InputContainer></InputContainer>
      </S.FormContainer>
      <S.TrailerContainer>
        <S.TrailerLeft>이미 아이디가 있으신가요?</S.TrailerLeft>
        <S.TrailerToLoginPageLink to={"/"}>
          로그인 페이지로 돌아가기
        </S.TrailerToLoginPageLink>
      </S.TrailerContainer>
    </S.Container>
  );
}
