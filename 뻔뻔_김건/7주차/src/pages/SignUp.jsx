import { useState, useEffect } from "react";
import {
  Input,
  LoginContainer,
  Mes,
  SignUpButton,
  LinkDiv,
} from "../style/SignUp.style";
import { Link, useNavigate } from "react-router-dom";
import { loginData } from "../redux/userSlice";
import axios from "axios";

export default function SignUp() {
  const [nameCheck, setNameCheck] = useState(false);
  const [idCheck, setIdCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [pwCheckCheck, setPwCheckCheck] = useState(false);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCorrect, setPwCorrect] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [ageMessage, setAgeMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwCorrectMessage, setPwCorrectMessage] = useState("");

  const [btn, setBtn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      nameCheck &&
      idCheck &&
      emailCheck &&
      ageCheck &&
      pwCheck &&
      pwCheckCheck
    ) {
      setBtn(true);
    }
  }, [nameCheck, idCheck, emailCheck, ageCheck, pwCheck, pwCheckCheck]);

  const checkName = (value) => {
    const regExp = /^[a-zA-Z가-힣]*$/;
    setName(value);

    if (value.trim() === "") {
      setNameMessage("이름을 입력해주세요!");
      setNameCheck(false);
    } else if (!regExp.test(value)) {
      setNameMessage("문자로 입력해주세요!");
      setNameCheck(false);
    } else {
      setNameMessage("");
      setNameCheck(true);
    }
  };

  const checkId = (value) => {
    const regExp = /^[a-zA-Z가-힣0-9]*$/;
    setId(value);

    if (value.trim() === "") {
      setIdMessage("아이디를 입력해주세요!");
      setIdCheck(false);
    } else if (!regExp.test(value)) {
      setIdMessage("문자로 입력해주세요!");
      setIdCheck(false);
    } else {
      setIdMessage("");
      setIdCheck(true);
    }
  };

  const checkEmail = (value) => {
    const regExp = /^[ㄱ-ㅎ가-힣a-zA-Z0-9@.]*$/;
    setEmail(value);

    if (value.trim() === "") {
      setEmailMessage("이메일을 입력해주세요!s");
      setEmailCheck(false);
    } else if (!email.includes("@")) {
      setEmailMessage("이메일 양식에 맞게 다시 입력해주세요!");
      setEmailCheck(false);
    } else if (!regExp.test(value)) {
      setEmailMessage("영문, 숫자만 입력가능합니다.");
      setEmailCheck(false);
    } else {
      setEmailMessage("");
      setEmailCheck(true);
    }
  };

  const checkAge = (value) => {
    const regExp = /^[0-9]*$/;
    setAge(value);

    if (value.trim() === "") {
      setAgeMessage("나이는 숫자로 입력해주세요!");
      setAgeCheck(false);
    } else if (value < 0) {
      setAgeMessage("나이는 양수여야 합니다.");
      setAgeCheck(false);
    } else if (value % 1 !== 0) {
      setAgeMessage("나이를 실수로 입력할 수 없습니다.");
      setAgeCheck(false);
    } else if (value < 19) {
      setAgeMessage("19세 이상만 사용 가능합니다!");
      setAgeCheck(false);
    } else {
      setAgeMessage("");
      setAgeCheck(true);
    }
  };

  const checkPw = (value) => {
    // 수정된 정규 표현식: 최소 하나의 소문자, 숫자, 특수문자를 포함하고 길이가 4~12자
    const regExp = /^(?=.*[a-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
    setPw(value);

    if (value.trim() === "") {
      setPwMessage("비밀번호를 입력해주세요!");
      setPwCheck(false);
    } else if (value.length < 4) {
      setPwMessage("최소 4자리 이상 입력해주세요.");
      setPwCheck(false);
    } else if (value.length > 12) {
      setPwMessage("최대 12자리까지 입력 가능합니다.");
      setPwCheck(false);
    } else if (!regExp.test(value)) {
      setPwMessage("비밀번호는 영어, 숫자, 특수문자를 포함해주세요.");
      setPwCheck(false);
    } else {
      setPwMessage("");
      setPwCheck(true);
    }
  };

  const checkPwCheck = (value) => {
    setPwCorrect(value);

    if (value.trim() === "") {
      setPwCorrectMessage("비밀번호를 다시 입력해주세요!");
      setPwCheckCheck(false);
    } else if (value !== pw) {
      setPwCorrectMessage(
        "비밀번호가 일치하지 않습니다"
      );
      setPwCheckCheck(false);
    } else {
      setPwCorrectMessage("");
      setPwCheckCheck(true);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const body = {
        name: name,
        email: email,
        age: age,
        username: id,
        password: pw,
        passwordCheck: pwCorrect,
      };

      await axios.post("http://localhost:8080/auth/signup", body);
      alert("회원가입 성공");
      navigate("/Login");
      loginData(body);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("이미 존재하는 아이디 입니다.");
      }
      if (error.response && error.response.status === 400) {
        alert("비밀번호가 일치하지 않습니다.");
      }
    }
  };

  return (
    <LoginContainer>
      <h1> 회원가입 페이지</h1>
      <br></br>
      <Input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => checkName(e.target.value.trim())}
      />
      <Mes>{nameMessage}</Mes>
      <Input
        type="text"
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={(e) => checkId(e.target.value.trim())}
      />
      <Mes>{idMessage}</Mes>
      <Input
        type="text"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={(e) => checkEmail(e.target.value.trim())}
      />
      <Mes>{emailMessage}</Mes>
      <Input
        type="text"
        placeholder="나이를 입력해주세요"
        value={age}
        onChange={(e) => checkAge(e.target.value.trim())}
      />
      <Mes>{ageMessage}</Mes>
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={pw}
        onChange={(e) => checkPw(e.target.value.trim())}
      />
      <Mes>{pwMessage}</Mes>
      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={pwCorrect}
        onChange={(e) => checkPwCheck(e.target.value.trim())}
      />
      <Mes>{pwCorrectMessage}</Mes>
      <br />
      <SignUpButton disabled={!btn} onClick={handleSignup}>
        계속하기
      </SignUpButton>
      <br></br>
      <LinkDiv>
          <h1>이미 아이디가 있으신가요?</h1>
        <Link to="/Login">
          <h1>로그인 페이지로 이동하기</h1>
        </Link>
      </LinkDiv>
    </LoginContainer>
  );
}