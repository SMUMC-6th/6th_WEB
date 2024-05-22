import React, { useState } from "react";
import {
  LoginContainer,
  Input,
  LoginButton,
} from "../style/Login.style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/userSlice";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (id === "" || pw === "") {
      alert("ID 혹은 PW값이 존재하지 않습니다.");
      return;
    }

    setLoading(true);

    try {
      const body = {
        username: id,
        password: pw,
      };

      const result = await axios.post("http://localhost:8080/auth/login", body);
      alert("로그인 성공");

      dispatch(loginAction(result.data));
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        alert("아이디 or 비밀번호가 잘못되었습니다.");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    }
  };

  return (
    <LoginContainer>
      <h1> 로그인 페이지 </h1>
      <br></br>
      <Input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <br></br>
      <LoginButton onClick={handleLogin}>
        {loading ? "Loading..." : "로그인"}
      </LoginButton>
    </LoginContainer>
  );
}