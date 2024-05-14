import { Link, useNavigate } from "react-router-dom";
import * as S from "./SignUpPage.sytle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../constants/schema";
import Input from "../../components/Input/Input";
import { authAxios } from "../../api/axios";

const SignUpPage = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    // mode: "onBlur",
    defaultValues: {
      name: "",
      username: "",
      email: "",
      age: null,
      password: "",
      passwordCheck: "",
    },
  });

  const signUp = async (e) => {
    try {
      await authAxios.post("/signup", e);
      alert("회원가입 성공 !");
      reset();
      nav("/login", { replace: true });
    } catch (err) {
      if (err.response.status === 409) {
        alert("이미 존재하는 아이디 입니다!");
      }
      console.log(err);
    }
  };

  const onSubmit = (e) => {
    signUp(e);
  };

  return (
    <S.Container>
      <h3>Join</h3>
      <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <Input errors={errors} register={register} name="name" type="text" placeholder="이름을 입력해주세요" />
        <Input errors={errors} register={register} name="username" type="text" placeholder="아이디를 입력해주세요" />
        <Input errors={errors} register={register} name="email" type="text" placeholder="이메일을 입력해주세요" />
        <Input errors={errors} register={register} name="age" type="text" placeholder="나이를 입력해주세요" />
        <Input
          errors={errors}
          register={register}
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <Input errors={errors} register={register} name="passwordCheck" type="password" placeholder="비밀번호 확인" />
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
