import React, { useState } from "react";
import * as S from "./LoginPage.style";

export default function LoginPage() {
  return (
    <S.Container>
      <S.Headers>로그인 페이지</S.Headers>
      <S.LoginContainer>
        <S.InputBox placeholder="아이디"></S.InputBox>
        <S.InputBox placeholder="비밀번호" type="password"></S.InputBox>
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginContainer>
      <S.TrailerContainer>
        <S.TrailerLeft>아이디가 없으신가요?</S.TrailerLeft>
        <S.TrailerToLoginPageLink to="/signUp">
          회원가입 페이지로 이동하기
        </S.TrailerToLoginPageLink>
      </S.TrailerContainer>
    </S.Container>
  );
}
