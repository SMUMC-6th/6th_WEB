import * as yup from "yup";
import { emailValid, idValid, nameValid, pwdValid } from "../utils/regex";

const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요 !").matches(nameValid, "문자열만 입력해주세요 !").trim(),
  username: yup
    .string()
    .required("아이디를 입력해주세요 !")
    .min(5, "아이디는 최소 5자리 이상으로 구성해주세요!")
    .matches(idValid, "문자열만 입력해주세요 !")
    .trim(),
  email: yup
    .string()
    .required("이메일을 입력해주세요 !")
    .matches(emailValid, "이메일 형식에 맞게 다시 입력해주세요 !")
    .trim(),
  age: yup
    .number()
    .required("나이를 입력해주세요 !")
    .typeError("나이는 숫자로 입력해주세요 !")
    .integer("나이는 소수가 될 수 없습니다.")
    .test("is-positive", "나이는 음수가 될 수 없습니다.", (value) => value >= 0)
    .min(19, "우리 영화 사이트는 19살 이상만 가입이 가능합니다."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요 !")
    .min(4, "최소 4자리 이상 입력해주세요 !")
    .max(12, "최대 12자리까지 입력이 가능합니다.")
    .matches(pwdValid, "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.")
    .trim(),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
    .required("비밀번호를 다시 입력해주세요 !")
    .trim(),
});

const loginSchema = yup.object({
  username: yup.string().required("아이디를 입력해주세요 !").matches(idValid, "문자열만 입력해주세요 !").trim(),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요 !")
    .min(4, "최소 4자리 이상 입력해주세요 !")
    .max(12, "최대 12자리까지 입력이 가능합니다.")
    .matches(pwdValid, "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.")
    .trim(),
});

export { schema, loginSchema };
