import { useNavigate } from 'react-router-dom';
import * as S from './Navbar.style';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <h1 onClick={() => navigate('/')}>UMC Movie</h1>
      <S.NavContainer>
        <S.NavLink to='#'>회원가입</S.NavLink>
        <S.NavLink to='/popular'>Popular</S.NavLink>
        <S.NavLink to='/nowplaying'>Now Playing</S.NavLink>
        <S.NavLink to='/toprated'>Top Rated</S.NavLink>
        <S.NavLink to='/upcoming'>Upcoming</S.NavLink>
      </S.NavContainer>
    </S.Container>
  );
};

export default Navbar;
