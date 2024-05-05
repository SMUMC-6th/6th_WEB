import * as SU from './SignUpPage.style'
import {  useEffect } from 'react';
import { useForm } from 'react-hook-form';


const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({mode:'onChange'});

  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const ageRegex = /^\d*$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{4,12}$/;

  const onSubmit = (data) => {
    // 폼 제출 시 처리할 로직 작성
    console.log(data);
  };

  const password = watch('pw');
  const passwordConfirm = watch('pw2');

  useEffect(() => {
    if (passwordRegex.test(password)) {
      clearErrors('pw');
    }
  }, [password]);

  return (
    <SU.Container>
      <p>회원가입 페이지</p>
      <SU.Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" id="userName" name="name" placeholder="이름을 입력해주세요" required autoFocus 
            {...register('name', {
              required: true,
              pattern: nameRegex })} />
            {errors?.name?.type === 'required' && <p>이름을 입력해주세요!</p>}
            {errors?.name?.type === 'pattern' && <p>올바른 이름을 입력해주세요</p>}

          <input type="email" id="userEmail" name="email" placeholder="이메일을 입력해주세요" required 
            {...register('email', {
              required: true,
              pattern: emailRegex })}  />

          <input type="number" id="userAge" name="age" placeholder="나이를 입력해주세요"
            {...register('age', {pattern : ageRegex})} />

          <input type="password" id="userPw" name="pw" placeholder="비밀번호를 입력해주세요"
            {...register('pw', {
                required: true,
                pattern: passwordRegex })} />
            {errors?.userPw?.type === 'required' && (
              <p>비밀번호를 입력해주세요</p>)}
            {errors?.userPw?.type === 'pattern' && (
              <p>비밀번호 양식에 맞게 입력해주세요</p>)}

          <input type="password" id="userPwCheck" name="pw2" placeholder="비밀번호 확인"
            {...register('pw2' , {
              required: true,
              validate: (value) => value === password || '비밀번호가 일치하지 않습니다', })}/>
            {errors?.pw2?.type === 'required' && (
              <p>비밀번호를 다시 입력해주세요</p>)}
            {errors?.pw2?.type === 'validate' && (
              <p>비밀번호가 일치하지 않습니다</p>)}
            {password === passwordConfirm && (<p>비밀번호가 일치합니다!</p>)}
    
          <button type="submit" id="submit">제출하기</button>
        <p>이미 아이디가 있으신가요? <SU.StyledLink to="/">로그인 페이지로 이동하기</SU.StyledLink></p>
        </form>
      </SU.Box>
    </SU.Container>
  )
}

export default SignUp;