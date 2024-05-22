import * as SU from './SignUpPage.style'
import {  useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const SignUp = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string()
      .required('이름을 입력해주세요.')
      .matches(/^[a-zA-Z가-힣\s]*$/, '올바른 이름을 입력해주세요!'),
    id: yup.string()
      .required('아이디를 입력해주세요.')
      .matches(/^[a-zA-Z0-9\s]*$/, '올바른 아이디를 입력해주세요.'),
    email: yup.string()
      .required('이메일을 입력해주세요.')
      .email('올바른 이메일을 입력해주세요.'),
    age: yup.number()
      .typeError("나이를 입력해주세요.")
      .positive("나이는 양수여야 합니다.")
      .integer("나이는 정수여야 합니다.")
      .min(19, "나이는 19살 이상이어야 합니다."),
    pw: yup.string()
      .required('비밀번호는 필수 값입니다.')
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{4,12}$/, '영어, 숫자, 특수문자를 모두 조합해야합니다.')
      .min(4, '비밀번호는 최소 4자리입니다.')
      .max(12, '비밀번호는 최대 12자리입니다.'),
    pw2: yup.string()
      .required('비밀번호 확인을 입력해주세요.')
      .oneOf([yup.ref('pw'), null], '비밀번호가 일치하지 않습니다.'),
  })

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});

  const onValid = (data) => {
    console.log("onValid called");
    console.log("# onValid", data);

    navigate('/login');
  };

  const onInValid = (errors) => {
    console.log("# onInValid", errors);
  };

  return (
    <SU.Container>
      <p>회원가입 페이지</p>
      <SU.Box>
        <form onSubmit={handleSubmit(onValid, onInValid)}>
          <input type="text" id="userName" placeholder="이름을 입력해주세요" autoFocus 
            {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}

          <input type="text" id="userId" placeholder="아이디를 입력해주세요"
            {...register('id')} />
            {errors.id && <p>{errors.id.message}</p>}

          <input type="email" id="userEmail" placeholder="이메일을 입력해주세요"
            {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}

          <input type="number" id="userAge" placeholder="나이를 입력해주세요"
            {...register('age')} />
            {errors.age && <p>{errors.age.message}</p>}

          <input type="password" id="userPw" placeholder="비밀번호를 입력해주세요"
            {...register('pw')} />
            {errors.pw && <p>{errors.pw.message}</p>}

          <input type="password" id="userPwCheck" placeholder="비밀번호 확인"
            {...register('pw2')}/>
            {errors.pw2 && <p>{errors.pw2.message}</p>}
    
          <button type="submit">제출하기</button>
          <p>이미 아이디가 있으신가요? <SU.StyledLink to="/login">로그인 페이지로 이동하기</SU.StyledLink></p>
        </form>
      </SU.Box>
    </SU.Container>
  )
}

export default SignUp;