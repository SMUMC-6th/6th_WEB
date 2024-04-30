import React, { useEffect, useState } from "react";
import * as S from "./SignUpPage.style";
import { useNavigate } from "react-router-dom";
import { emailValid } from "../../utils/regex";
import trendsAxios from "../../api/axios";

const SignUpPage = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const data = {
    email: email,
    password: password,
    nickname: nickname,
  };

  const handleSubmit = async () => {
    try {
      const res = await trendsAxios.post("/auth/register/email", data);
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
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <S.ErrorMsg $valid={validEmail}>
          이메일 형식에 맞게 작성해주세요
        </S.ErrorMsg>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="nickname"
        />
        <button onClick={handleSubmit}>회원가입</button>
      </S.InputForm>
    </S.Container>
  );
};

export default SignUpPage;
