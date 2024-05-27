import * as LS from './LoginPage.style'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate(); // 경로 이동
  const [error, setError] = useState(''); // 오류 처리

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {userId, userPw} = e.target.elements;

    try{
      const response = await axios.post('http://localhost:8080/auth/login', {
        username: userId.value,
        password: userPw.value,
      });
      const {token, username} = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      navigate("/");
    } catch(errorr){
      setError('아이디 또는 비밀번호가 잘못되었습니다.');
      console.error(error.message);
    }
  }
  return (
  <LS.Container>
      <p>🔒 로그인 🔒</p>
      <LS.Box>
        <form onSubmit={handleSubmit}>
          <input type="text" id="userId" placeholder="아이디을 입력해주세요" autoFocus/>

          <input type="password" id="userPw" placeholder="비밀번호를 입력해주세요" />
    
          <button type="submit">로그인</button>
        </form>
      </LS.Box>
    </LS.Container>
  )
}

export default LoginPage;