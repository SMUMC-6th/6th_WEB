import { Link, useNavigate } from "react-router-dom";
import * as S from "./SignUpPage.sytle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../constants/schema";

const SignUpPage = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      age: null,
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (e) => {
    console.log(e);
    reset();
    nav("/login", { replace: true });
  };

  return (
    <S.Container>
      <h3>Join</h3>
      <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} type="text" placeholder="이름을 입력해주세요" />
        {errors && <S.ErrorMsg>{errors?.username?.message}</S.ErrorMsg>}
        <input {...register("email")} type="text" placeholder="이메일을 입력해주세요" />
        {errors && <S.ErrorMsg>{errors?.email?.message}</S.ErrorMsg>}
        <input {...register("age")} type="text" placeholder="나이를 입력해주세요" />
        {errors && <S.ErrorMsg>{errors?.age?.message}</S.ErrorMsg>}
        <input {...register("password")} type="password" placeholder="비밀번호를 입력해주세요" />
        {errors && <S.ErrorMsg>{errors?.password?.message}</S.ErrorMsg>}
        <input {...register("passwordConfirm")} type="password" placeholder="비밀번호 확인" />
        {errors && <S.ErrorMsg>{errors?.passwordConfirm?.message}</S.ErrorMsg>}
        <S.Button type="submit" disabled={Object.keys(errors).length !== 0}>
          submit
        </S.Button>
      </S.SignUpForm>
      <S.Wrapper>
        <p>Do you have a id?</p>
        <Link to="/login">Log in</Link>
      </S.Wrapper>
    </S.Container>
  );
};

export default SignUpPage;
