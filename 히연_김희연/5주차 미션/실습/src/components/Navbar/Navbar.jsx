import { useNavigate } from "react-router-dom";
import * as S from "./Navbar.style";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <h1 onClick={() => navigate("/")}>UMC Movie</h1>
      <S.NavContainer>
        <S.Link to="/signup">회원가입</S.Link>
        <S.Link to="/popular">Popular</S.Link>
        <S.Link to="/nowplaying">Now Playing</S.Link>
        <S.Link to="/toprated">Top Rated</S.Link>
        <S.Link to="/upcoming">Upcoming</S.Link>
      </S.NavContainer>
    </S.Container>
  );
};

export default Navbar;
