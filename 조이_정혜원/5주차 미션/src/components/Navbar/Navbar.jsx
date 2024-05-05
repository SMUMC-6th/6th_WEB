import { useNavigate, NavLink } from "react-router-dom";
import * as N from "./Navbar.style";
import Logo from "../../assets/logo.webp";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <N.Container>
      <img src={Logo} onClick={() => nav("/")} />
      <N.NavContainer>
        <NavLink to="/signup">회원가입</NavLink>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/now">Now Playing</NavLink>
        <NavLink to="top-rated">Top Rated</NavLink>
        <NavLink to="up-coming">UpComing</NavLink>
      </N.NavContainer>
    </N.Container>
  );
};

export default Navbar;
