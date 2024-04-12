import * as S from "./Navbar.style";
import React from "react";
import { Link } from "react-router-dom"; // 라우터의 링크 구현을 위해 import
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // const [isHover, setIsHover] = useState(false); -> 그냥 css 모듈 import하고 스타일 컴포넌트 내부에서 처리함
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <S.Container>
      <S.Caption>
        <S.Links to="/">🪄 SMUMC 🪄</S.Links>
      </S.Caption>
      <S.PageLinkContainer>
        <S.Links to="/">
          {!isClicked && (
            <S.PageLink onClick={() => setIsClicked(true)}>로그인</S.PageLink>
          )}
        </S.Links>
        <S.Links to="/">
          {isClicked && (
            <S.PageLink onClick={() => setIsClicked(false)}>
              로그아웃
            </S.PageLink>
          )}
        </S.Links>
        <S.Links to="/popular">
          <S.PageLink>Popular</S.PageLink>
        </S.Links>
        <S.Links to="/nowPlaying">
          <S.PageLink>Now Playing</S.PageLink>
        </S.Links>
        <S.Links to="/topRated">
          <S.PageLink>Top Rated</S.PageLink>
        </S.Links>
        <S.Links to="/upcoming">
          <S.PageLink>Upcoming</S.PageLink>
        </S.Links>
      </S.PageLinkContainer>
    </S.Container>
  );
};

export default Navbar;
