import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const initialState = {
  value: "",
  error: "",
  isValid: false,
};

export default function Sign_Up() {
  const [name, setName] = useState(initialState);
  const [id, setId] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [age, setAge] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [passwordConfirm, setPasswordConfirm] = useState(initialState);

  const isFormValid =
    !name.error &&
    !id.error &&
    !email.error &&
    !age.error &&
    !password.error &&
    !passwordConfirm.error;

  const handleInputChange = (setter, value, validationFunction) => {
    const error = validationFunction(value);
    setter({ value, error, isValid: !error });
  };

  const validateName = (value) => {
    const regExp = /^[a-zA-Z가-힣]*$/;
    if (value.trim() === "") return "반드시 이름을 입력해주세요.";
    if (!regExp.test(value)) return "문자로 입력해주세요";
    return "";
  };

  const validateId = (value) => {
    const regExp = /^[A-Za-z]{5,15}/g;
    if (value.trim() === "") return "반드시 아이디를 입력해주세요.";
    if (!regExp.test(value)) return "문자로 입력해주세요";
    return "";
  };

  const validateEmail = (value) => {
    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (value.trim() === "") return "반드시 이메일을 입력해주세요.";
    if (!regExp.test(value)) return "이메일 양식에 맞춰주세요.";
    return "";
  };

  const validateAge = (value) => {
    if (value.trim() === "") return "반드시 나이를 입력해주세요.";
    if (!/^[0-9]*$/.test(value)) return "숫자(정수)만 입력가능합니다.";
    if (parseInt(value) < 20) return "19세 미만은 가입이 불가합니다.";
    return "";
  };

  const validatePassword = (value) => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    if (value.trim() === "") return "반드시 비밀번호를 입력해주세요.";
    if (value.length <= 4) return "비밀번호는 4자리 이상 입력해주세요.";
    if (value.length > 12) return "비밀번호는 최대 12자리까지 가능합니다.";
    if (!regExp.test(value))
      return "영문 대소문자, 숫자, 특수문자를 사용해서 입력해주세요.";
    return "";
  };

  const validatePasswordConfirm = (value) => {
    if (value.trim() === "") return "반드시 입력해주세요.";
    if (value !== password.value)
      return "작성한 비밀번호와 동일하지 않습니다. 다시 한 번 확인해주세요.";
    return "";
  };

  return (
    <Container>
      <h1 style={{ color: "white" }}>회원가입 페이지</h1>
      <InputContainer>
        <Input
          type="text"
          placeholder="이름"
          value={name.value}
          onChange={(e) =>
            handleInputChange(setName, e.target.value, validateName)
          }
        />
        <Mes>{name.error}</Mes>

        <Input
          type="text"
          placeholder="아이디"
          value={id.value}
          onChange={(e) => handleInputChange(setId, e.target.value, validateId)}
        />
        <Mes>{id.error}</Mes>

        <Input
          type="text"
          placeholder="이메일"
          value={email.value}
          onChange={(e) =>
            handleInputChange(setEmail, e.target.value, validateEmail)
          }
        />
        <Mes>{email.error}</Mes>

        <Input
          type="text"
          placeholder="나이"
          value={age.value}
          onChange={(e) =>
            handleInputChange(setAge, e.target.value, validateAge)
          }
        />
        <Mes>{age.error}</Mes>

        <Input
          type="password"
          placeholder="비밀번호"
          value={password.value}
          onChange={(e) =>
            handleInputChange(setPassword, e.target.value, validatePassword)
          }
        />
        <Mes>{password.error}</Mes>

        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm.value}
          onChange={(e) =>
            handleInputChange(
              setPasswordConfirm,
              e.target.value,
              validatePasswordConfirm
            )
          }
        />
        <Mes>{passwordConfirm.error}</Mes>
        <br />

        <Btn disabled={!isFormValid}>가입하기</Btn>
        <LoginOps>
          <Span>이미 아이디가 있으신가요?</Span>
          <StyledLink to="/login" style={{ textDecoration: "none" }}>
            <Span>로그인 하러가기</Span>
          </StyledLink>
        </LoginOps>
      </InputContainer>
    </Container>
  );
}

const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border-radius: 15px;
  color: white;
  border: 1px solid white;
`;

const InputContainer = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 90vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 4px 4px 0px 0px;
`;
const Mes = styled.div`
  color: red;
`;
const Span = styled.span`
  font-size: 14px;
  color: white;
`;
const LoginOps = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
