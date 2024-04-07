import { Link, useNavigate } from "react-router-dom";
import * as N from "./Navbar.style";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const nav = useNavigate();

  // TODO: 클릭되면 그 path에서 색 변경
  return (
    <N.Container>
      <img src={Logo} onClick={() => nav("/")} />
      <N.NavContainer>
        <Link to="/">회원가입</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/now">Now Playing</Link>
        <Link to="top-rated">Top Rated</Link>
        <Link to="up-coming">UpComing</Link>
      </N.NavContainer>
    </N.Container>
  );
};

export default Navbar;
