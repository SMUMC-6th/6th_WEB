import { NavLink } from "react-router-dom";
import * as S from "./HamburgerMenu.style";
import { useState } from "react";

const HamburgerMenu = ({ isOpen, setIsOpen, token }) => {
  const logout = () => {
    setIsOpen((prev) => !prev);
    localStorage.clear();
    window.location.reload();
  };

  return (
    <S.Container $isOpen={isOpen}>
      <div>
        <S.CloseMenu onClick={() => setIsOpen((prev) => !prev)} />
      </div>

      {token ? (
        <NavLink to="/" onClick={logout}>
          로그아웃
        </NavLink>
      ) : (
        <>
          <NavLink to="/login" onClick={() => setIsOpen((prev) => !prev)}>
            로그인
          </NavLink>
          <NavLink to="/signup" onClick={() => setIsOpen((prev) => !prev)}>
            회원가입
          </NavLink>
        </>
      )}
      <NavLink to="/popular" onClick={() => setIsOpen((prev) => !prev)}>
        Popular
      </NavLink>
      <NavLink to="/now" onClick={() => setIsOpen((prev) => !prev)}>
        Now Playing
      </NavLink>
      <NavLink to="top-rated" onClick={() => setIsOpen((prev) => !prev)}>
        Top Rated
      </NavLink>
      <NavLink to="up-coming" onClick={() => setIsOpen((prev) => !prev)}>
        UpComing
      </NavLink>
    </S.Container>
  );
};

export default HamburgerMenu;
