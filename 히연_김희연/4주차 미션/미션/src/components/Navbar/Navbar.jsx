// Navbar.jsx

import { useNavigate } from "react-router-dom";
import * as S from "./Navbar.style";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginClick = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <S.Container>
      <h1 onClick={() => navigate("/")}>UMC Movie</h1>
      <S.NavContainer>
        <S.NavLink
          to="#"
          onClick={handleLoginClick}
          style={{ color: "yellow" }}
        >
          {isLoggedIn ? "로그인" : "로그아웃"}
        </S.NavLink>

        <S.NavLink
          to="/popular"
          className={activeLink === "/popular" ? "active" : ""}
          onClick={() => handleNavLinkClick("/popular")}
        >
          Popular
        </S.NavLink>
        <S.NavLink
          to="/nowplaying"
          className={activeLink === "/nowplaying" ? "active" : ""}
          onClick={() => handleNavLinkClick("/nowplaying")}
        >
          Now Playing
        </S.NavLink>
        <S.NavLink
          to="/toprated"
          className={activeLink === "/toprated" ? "active" : ""}
          onClick={() => handleNavLinkClick("/toprated")}
        >
          Top Rated
        </S.NavLink>
        <S.NavLink
          to="/upcoming"
          className={activeLink === "/upcoming" ? "active" : ""}
          onClick={() => handleNavLinkClick("/upcoming")}
        >
          Upcoming
        </S.NavLink>
      </S.NavContainer>
    </S.Container>
  );
};

export default Navbar;
