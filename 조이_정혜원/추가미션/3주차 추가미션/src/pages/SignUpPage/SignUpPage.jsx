import React, { useEffect, useState } from "react";
import * as S from "./SignUpPage.style";
import { useNavigate } from "react-router-dom";
import { emailValid } from "../../utils/regex";
import trendsAxios from "../../api/axios";

const SignUpPage = () => {
  const nav = useNavigate();

  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const { email, password, nickname } = userInputs;

  const [validEmail, setValidEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await trendsAxios.post("/auth/register/email", userInputs);
      console.log(res);

      nav("/login", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (emailValid.test(email)) setValidEmail(true);
    else setValidEmail(false);
  }, [email]);

  return (
    <S.Container>
      <h4>JOIN MEMBER</h4>
      <S.InputForm onSubmit={(e) => e.preventDefault()}>
        <input
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
          placeholder="email"
        />
        <S.ErrorMsg $valid={validEmail}>
          이메일 형식에 맞게 작성해주세요
        </S.ErrorMsg>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
        />
        <input
          name="nickname"
          type="text"
          value={nickname}
          onChange={handleChange}
          placeholder="nickname"
        />
        <button onClick={handleSubmit} disabled={!validEmail}>
          회원가입
        </button>
      </S.InputForm>
    </S.Container>
  );
};

export default SignUpPage;
