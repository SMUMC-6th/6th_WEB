import * as S from "./Navbar.style";
import React from "react";
import { Link } from "react-router-dom"; // 라우터의 링크 구현을 위해 import
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // const [isHover, setIsHover] = useState(false); -> 그냥 css 모듈 import하고 스타일 컴포넌트 내부에서 처리함
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedCategory, setIsClickedCategory] = useState("");

  // links 컴포넌트를 두개 놓고 window.localStorage.get(유저네임)해서 이게 있으면 logout창, 없으면 회원가입으로 변경
  return (
    <S.Container>
      <S.Caption>
        <S.Links to="/">🪄 SMUMC 🪄</S.Links>
      </S.Caption>
      <S.PageLinkContainer>
        {window.localStorage.getItem("myUsername") && (
          <S.Links to="/login">
            <S.PageLink
              onClick={() => {
                setIsClicked(true);
                window.localStorage.removeItem("myUsername");
                window.localStorage.removeItem("token");
              }}
              color="rgb(255,255,100)"
            >
              로그아웃
            </S.PageLink>
          </S.Links>
        )}
        {!window.localStorage.getItem("myUsername") && (
          <S.Links to="/signUp">
            <S.PageLink
              onClick={() => setIsClicked(true)}
              color="rgb(255,255,100)"
            >
              회원가입
            </S.PageLink>
          </S.Links>
        )}

        <S.Links to="/popular">
          <S.PageLink
            onClick={() => setIsClickedCategory("popular")}
            color={
              isClickedCategory === "popular" ? "rgb(255, 255, 100)" : "white"
            }
          >
            Popular
          </S.PageLink>
        </S.Links>
        <S.Links to="/nowPlaying">
          <S.PageLink
            onClick={() => setIsClickedCategory("nowPlaying")}
            color={
              isClickedCategory === "nowPlaying"
                ? "rgb(255, 255, 100)"
                : "white"
            }
          >
            Now Playing
          </S.PageLink>
        </S.Links>
        <S.Links to="/topRated">
          <S.PageLink
            onClick={() => setIsClickedCategory("topRated")}
            color={
              isClickedCategory === "topRated" ? "rgb(255, 255, 100)" : "white"
            }
          >
            Top Rated
          </S.PageLink>
        </S.Links>
        <S.Links to="/upcoming">
          <S.PageLink
            onClick={() => setIsClickedCategory("upcoming")}
            color={
              isClickedCategory === "upcoming" ? "rgb(255, 255, 100)" : "white"
            }
          >
            Upcoming
          </S.PageLink>
        </S.Links>
      </S.PageLinkContainer>
    </S.Container>
  );
};

export default Navbar;
