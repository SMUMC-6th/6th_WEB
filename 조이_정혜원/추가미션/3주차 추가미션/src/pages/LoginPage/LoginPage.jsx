import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import base64 from "base-64";
import { emailValid } from "../../utils/regex";
import * as S from "./LoginPage.style";
import trendsAxios from "../../api/axios";

const LoginPage = () => {
  const nav = useNavigate();

  const [login, setLogin] = useState(false);

  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInputs;

  const [validEmail, setValidEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
  };

  const handleSubmit = async () => {
    const auth = base64.encode(`${email}:${password}`);
    const options = {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    };

    try {
      const res = await trendsAxios.post("/auth/login/email", {}, options); // body 없을 떄 빈 객체 필요!!
      console.log(res.data);

      setUserInputs({ email: "", password: "" });

      setLogin(true);
    } catch (error) {
      alert("로그인 실패 !");
      console.error("로그인 실패:", error);
    }
  };

  useEffect(() => {
    if (emailValid.test(email)) setValidEmail(true);
    else setValidEmail(false);
  }, [email]);

  return (
    <div>
      {login ? (
        <S.Container>로그인 완룡 ~</S.Container>
      ) : (
        <S.Container>
          <S.LoginContainer>
            <h4>MEMBER LOGIN</h4>
            <S.InputWrapper onSubmit={(e) => e.preventDefault()}>
              <input
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
                placeholder=" email"
              />
              <S.ErrorMsg $valid={validEmail}>
                이메일 형식에 맞게 작성해주세요
              </S.ErrorMsg>
              <input
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder=" password"
              />
              <button onClick={handleSubmit} disabled={!validEmail}>
                로그인
              </button>
            </S.InputWrapper>
          </S.LoginContainer>
          <S.SignupConatiner>
            <h4>JOIN MEMBER</h4>
            <div>
              <p>
                회원이 아니면 <br />
                회원가입을 진행해주세용
              </p>
              <button onClick={() => nav("/signup")}>회원가입</button>
            </div>
          </S.SignupConatiner>
        </S.Container>
      )}
    </div>
  );
};

export default LoginPage;
