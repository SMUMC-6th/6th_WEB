import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input/Input";
import * as S from "./LoginPage.style";
import { loginSchema } from "../../constants/schema";
import { authAxios } from "../../api/axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    // mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const login = async (e) => {
    try {
      const res = await authAxios.post("/login", e);

      localStorage.clear();
      localStorage.setItem("token", res.data.token);
      alert("로그인 성공 !");
      reset();
      nav("/", { replace: true });
    } catch (err) {
      if (err.response.status === 401) {
        alert("Invalid user or password");
      }
      console.log(err);
    }
  };

  const onSubmit = (e) => {
    login(e);
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
      <S.LoginForm>
        <Input errors={errors} register={register} name="username" type="text" placeholder="id" />
        <Input errors={errors} register={register} name="password" type="password" placeholder="password" />
        <S.Button type="submit">login</S.Button>
      </S.LoginForm>
    </S.Container>
  );
};

export default LoginPage;
