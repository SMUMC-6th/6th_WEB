import React, { useState } from "react";
import {
  NavbarContainer,
  LogoBox,
  NavbarItem,
  LinkPage,
  Button,
} from "./Movies.style";

export default function Navbar() {
  const [logIn, setlogIn] = useState("로그인");

  function changeSet() {
    setlogIn(logIn === "로그인" ? "로그아웃" : "로그인");
  }

  return (
    <NavbarContainer>
      <LogoBox>
        <LinkPage to="/">
          <h1>UMC Movie</h1>
        </LinkPage>
      </LogoBox>
      <NavbarItem>
        <Button onClick={changeSet}>
          <h1>{logIn}</h1>
        </Button>
        <LinkPage to="/Popular">
          <h1>Popular</h1>
        </LinkPage>
        <LinkPage to="/NowPlaying">
          <h1>Now Playing</h1>
        </LinkPage>
        <LinkPage to="/TopRates">
          <h1>Top Rated</h1>
        </LinkPage>
        <LinkPage to="/Upcoming">
          <h1>Upcoming</h1>
        </LinkPage>
      </NavbarItem>
    </NavbarContainer>
  );
}