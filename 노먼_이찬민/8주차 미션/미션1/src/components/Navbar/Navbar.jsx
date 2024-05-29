import * as S from "./Navbar.style";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useDevice } from "../../Hooks/useDevice";

const Navbar = () => {
  const { isDesktop, isTablet, isMobile } = useDevice();
  // console.log(myDevice);

  // const [isHover, setIsHover] = useState(false); -> 그냥 css 모듈 import하고 스타일 컴포넌트 내부에서 처리함
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedCategory, setIsClickedCategory] = useState("");
  const [isClickedHamburger, setIsClickedHamburger] = useState(false);

  // links 컴포넌트를 두개 놓고 window.localStorage.get(유저네임)해서 이게 있으면 logout창, 없으면 회원가입으로 변경
  return (
    <S.Container>
      <S.Caption>
        <S.Links to="/">🪄 SMUMC 🪄</S.Links>
      </S.Caption>
      {isDesktop && (
        <S.PageLinkContainer>
          {window.localStorage.getItem("myUsername") ? (
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
          ) : (
            <S.registerAndLoginBox>
              <S.Links to="/signUp">
                <S.PageLink
                  onClick={() => setIsClicked(true)}
                  color="rgb(255,255,100)"
                >
                  회원가입
                </S.PageLink>
              </S.Links>
              <S.Links to="/login">
                <S.PageLink
                  onClick={() => setIsClicked(true)}
                  color="rgb(255,255,100)"
                >
                  로그인
                </S.PageLink>
              </S.Links>
            </S.registerAndLoginBox>
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
                isClickedCategory === "topRated"
                  ? "rgb(255, 255, 100)"
                  : "white"
              }
            >
              Top Rated
            </S.PageLink>
          </S.Links>
          <S.Links to="/upcoming">
            <S.PageLink
              onClick={() => setIsClickedCategory("upcoming")}
              color={
                isClickedCategory === "upcoming"
                  ? "rgb(255, 255, 100)"
                  : "white"
              }
            >
              Upcoming
            </S.PageLink>
          </S.Links>
        </S.PageLinkContainer>
      )}
      {!isDesktop && (
        <S.HamburgerBar
          onClick={() => setIsClickedHamburger((prev) => !prev)}
        ></S.HamburgerBar>
      )}
      <AnimatePresence>
        {!isDesktop && isClickedHamburger && (
          <S.SubMenuContainer
            initial={{ x: 100, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
              type: "spring",
              duration: 0.9,
              bounce: 0.5,
            }}
          >
            <S.SubMenuItem
              to={"/signUp"}
              onClick={() => isClickedHamburger((prev) => !prev)}
            >
              <p>✍ 회원가입</p>
            </S.SubMenuItem>
            <S.SubMenuItem
              to={"/popular"}
              onClick={() => isClickedHamburger((prev) => !prev)}
            >
              <p>❤️ popular</p>
            </S.SubMenuItem>
            <S.SubMenuItem
              to={"/nowPlaying"}
              onClick={() => isClickedHamburger((prev) => !prev)}
            >
              <p>🩷 now playing</p>
            </S.SubMenuItem>
            <S.SubMenuItem
              to={"/topRated"}
              onClick={() => isClickedHamburger((prev) => !prev)}
            >
              <p>🧡 top rated</p>
            </S.SubMenuItem>
            <S.SubMenuItem
              to={"/upcoming"}
              onClick={() => isClickedHamburger((prev) => !prev)}
            >
              <p>💛 upcoming</p>
            </S.SubMenuItem>
          </S.SubMenuContainer>
        )}
      </AnimatePresence>
    </S.Container>
  );
};

export default Navbar;
