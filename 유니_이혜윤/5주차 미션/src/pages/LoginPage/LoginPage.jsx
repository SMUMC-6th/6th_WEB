import * as LS from './LoginPage.style'

const LoginPage = () => {
  return (
  <LS.Container>
      <p>🔒 로그인 🔒</p>
      <LS.Box>
        <form>
          <input type="email" id="userEmail" placeholder="이메일을 입력해주세요" autoFocus/>

          <input type="password" id="userPw" placeholder="비밀번호를 입력해주세요" />
    
          <button type="submit">로그인</button>
        </form>
      </LS.Box>
    </LS.Container>
  )
}

export default LoginPage;