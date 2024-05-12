import {
  Input,
  LoginContainer,
  LoginButton,
} from "../components/Movies.style";

export default function Loginvalid() {
  return (
    <LoginContainer>
      <h1>  로그인 페이지  </h1>
      <br></br>
      <Input
        type="text"
        placeholder="아이디"
      />

      <Input
        type="text"
        placeholder="비밀번호"
      />
      <br />

      <LoginButton>
        로그인
      </LoginButton>

    </LoginContainer>
  );
}