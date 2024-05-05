import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 50px;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <h1>Oops!</h1>
      <p>예상치 못한 에러가 발생했습니다😭</p>
      <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>메인으로 이동하기</Link>
    </Container>
  )
}

export default NotFound;