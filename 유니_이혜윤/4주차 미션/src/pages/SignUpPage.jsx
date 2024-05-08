import * as SU from './SignUpPage.style'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <SU.Container>
      <p>회원가입 페이지</p>
      <SU.Box>
        <input type="text" id="userName" name="name" placeholder="이름을 입력해주세요" required autoFocus />
        <input type="email" id="userEmail" name="email" placeholder="이메일을 입력해주세요" required/>
        <input type="number" id="userAge" name="age" placeholder="나이를 입력해주세요"/>
        <input type="password" id="userPw" name="pw" placeholder="비밀번호를 입력해주세요"/>
        <input type="password" id="userPwCheck" name="pw2" placeholder="비밀번호 확인"/>
        <button type="submit" id="submit">제출하기</button>
        <p>이미 아이디가 있으신가요? <SU.StyledLink to="/">로그인 페이지로 이동하기</SU.StyledLink></p>
      </SU.Box>
    </SU.Container>
  )
}

export default SignUp;