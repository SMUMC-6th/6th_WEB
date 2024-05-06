import * as SU from './SignUpPage.style'
import {  useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({mode: "onSubmit"});

  const password = watch('pw');

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
            {...register('name', {
              required: '이름을 입력해주세요!' ,
              pattern: {
                value: /^[a-zA-Z가-힣\s]*$/,
                message: '올바른 이름을 입력해주세요!' }
            })} />
          {errors.name && <p>{errors.name.message}</p>}


          <input type="email" id="userEmail" placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: '이메일을 입력해주세요!',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: '올바른 이메일을 입력해주세요!' }
            })} />
            {errors.email && <p>{errors.email.message}</p>}

          <input type="number" id="userAge" placeholder="나이를 입력해주세요"
            {...register('age', {
              // pattern : /^\d*$/,
              required: "나이는 숫자로 입력해주세요.",
              min: {
                value: 19,
                message: "나이는 19살 이상이어야 합니다." }
            })} />
            {errors.age && <p>{errors.age.message}</p>}

          <input type="password" id="userPw" placeholder="비밀번호를 입력해주세요"
            {...register('pw', {
                required: "비밀번호는 필수 값입니다.",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{4,12}$/,
                  message: "영어, 숫자, 특수문자를 모두 조합해야합니다." },
                minLength: {
                  value: 4,
                  message: "비밀번호는 최소 4자리입니다." },
                maxLength: {
                  value: 12,
                  message: "비밀번호는 최대 12자리입니다. " }
            })} />
            {errors.pw && <p>{errors.pw.message}</p>}

          <input type="password" id="userPwCheck" placeholder="비밀번호 확인"
            {...register('pw2' , {
              required: true,
              validate: value => value === password || "비밀번호가 일치하지 않습니다." })}/>
            {errors.pw2 && <p>{errors.pw2.message}</p>}
    
          <button type="submit">제출하기</button>
          <p>이미 아이디가 있으신가요? <SU.StyledLink to="/login">로그인 페이지로 이동하기</SU.StyledLink></p>
        </form>
      </SU.Box>
    </SU.Container>
  )
}

export default SignUp;