import * as S from "./LoginPage.style";

const LoginPage = () => {
  return (
    <S.Container>
      <h3>Login</h3>
      <S.LoginForm>
        <input placeholder="id" />
        <input placeholder="password" />
        <S.Button>login</S.Button>
      </S.LoginForm>
    </S.Container>
  );
};

export default LoginPage;
