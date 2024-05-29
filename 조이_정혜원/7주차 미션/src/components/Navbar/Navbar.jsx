import { useNavigate, NavLink } from "react-router-dom";
import * as N from "./Navbar.style";
import Logo from "../../assets/logo.webp";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleHome = () => {
    if (isOpen) {
      setIsOpen((prev) => !prev);
    }
    nav("/");
  };

  return (
    <N.Container>
      <img src={Logo} onClick={handleHome} />
      <N.Button>
        <N.Menu onClick={() => setIsOpen((prev) => !prev)} />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} token={token} />
      </N.Button>
      <N.NavContainer>
        {token ? (
          <NavLink to="/" onClick={logout}>
            로그아웃
          </NavLink>
        ) : (
          <>
            <NavLink to="/login">로그인</NavLink>
            <NavLink to="/signup">회원가입</NavLink>
          </>
        )}
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/now">Now Playing</NavLink>
        <NavLink to="top-rated">Top Rated</NavLink>
        <NavLink to="up-coming">UpComing</NavLink>
      </N.NavContainer>
    </N.Container>
  );
};

export default Navbar;
