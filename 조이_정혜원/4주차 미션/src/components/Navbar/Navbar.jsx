import { useNavigate, NavLink } from "react-router-dom";
import * as N from "./Navbar.style";
import Logo from "../../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const nav = useNavigate();
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((prev) => !prev);
  };

  // TODO: 클릭되면 그 path에서 색 변경
  return (
    <N.Container>
      <img src={Logo} onClick={() => nav("/")} />
      <N.NavContainer>
        <div onClick={handleLogin}>{login ? "로그아웃" : "로그인"}</div>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/now">Now Playing</NavLink>
        <NavLink to="top-rated">Top Rated</NavLink>
        <NavLink to="up-coming">UpComing</NavLink>
      </N.NavContainer>
    </N.Container>
  );
};

export default Navbar;
