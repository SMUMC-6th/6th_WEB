import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./LoginPage.style";
import InputContainer from "./Components/InputContainer";
import { usePostVerify } from "../../Hooks/usePostVerify";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isPosting, setIsPosting] = useState(false);
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const [errorInputs, setErrorInputs] = useState({
    username: 1,
    password: 1,
  }); // 1이면 오류, 0이면 통과
  const [loginButtonDisable, setloginButtonDisable] = useState(true);

  const { token, myUsername, isLoading } = usePostVerify(
    // 이 훅은 inputvalue가 정해져야 사실 상 실행됨 (내부로직에서 name 없으면 바로종료)
    // 로직 약간 바꾸면 isPosting도 매개변수로 받아서 의존성배열에 isPosting만하면 될거같기도 한데...?
    {
      type: "login",
      username: inputValue.username,
      password: inputValue.password,
      isPosting: isPosting,
    }
  );
  // 로그인 post 결과 토큰 username 로컬 스토리지에 저장해놓기
  if (token && myUsername) {
    localStorage.clear();
    localStorage.setItem("myUsername", myUsername);
    localStorage.setItem("token", token);
    setIsPosting(false);
    navigate("/");
  }

  useEffect(() => {
    let sum = 0;
    for (const key in errorInputs) {
      sum = sum + errorInputs[key];
    }
    console.log(sum);
    if (sum === 0) setloginButtonDisable(false);
  }, [errorInputs]);

  const submitHandler = (e) => {
    e.preventDefault();
    setInputValue({
      username: e.target["username"].value,
      password: e.target["password"].value,
    });
    setIsPosting(true);
  };

  return (
    <S.Container>
      <S.Headers>로그인 페이지</S.Headers>
      <S.LoginContainer onSubmit={submitHandler}>
        <InputContainer
          type="username"
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <InputContainer
          type="password"
          errorInputs={errorInputs}
          setErrorInputs={setErrorInputs}
        ></InputContainer>
        <S.LoginButton disabled={loginButtonDisable}>로그인</S.LoginButton>
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
