import { Link, useNavigate } from "react-router-dom";
import * as S from "./SignUpPage.sytle";
import { useForm } from "react-hook-form";
import { emailValid, nameValid, pwdValid } from "../../utils/regex";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("이름을 입력해주세요 !").matches(nameValid, "문자열만 입력해주세요 !").trim(),
  email: yup
    .string()
    .required("이메일을 입력해주세요 !")
    .matches(emailValid, "이메일 형식에 맞게 다시 입력해주세요 !")
    .trim(),
  age: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .min(19, "우리 영화 사이트는 19살 이상만 가입이 가능합니다.")
    .positive("나이는 음수가 될 수 없습니다.")
    .integer("나이는 소수가 될 수 없습니다.")
    .required("나이를 입력해주세요 !"),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요 !")
    .min(4, "최소 4자리 이상 입력해주세요 !")
    .max(12, "최대 12자리까지 입력이 가능합니다.")
    .matches(pwdValid, "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.")
    .trim(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
    .required("비밀번호를 다시 입력해주세요 !")
    .trim(),
});

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
      age: "",
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
