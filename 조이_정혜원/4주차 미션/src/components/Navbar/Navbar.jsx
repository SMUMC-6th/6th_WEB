import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/popular">Popular</Link>
        <Link to="/now">Now Playing</Link>
        <Link to="top-rated">Top Rated</Link>
        <Link to="up-coming">UpComing</Link>
      </N.NavContainer>
    </N.Container>
  );
};

export default Navbar;
