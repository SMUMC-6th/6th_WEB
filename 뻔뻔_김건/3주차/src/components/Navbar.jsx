import React from "react";
import { NavbarContainer, LogoBox, NavbarItem, LinkPage } from "./Movies.style";

export default function Navbar() {
  return (
    <NavbarContainer>
      <LogoBox>
        <LinkPage to="/">
          <h1>UMC Movie</h1>
        </LinkPage>
      </LogoBox>
      <NavbarItem>
        <h1>회원가입</h1>
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
          <h1>UpComing</h1>
        </LinkPage>
      </NavbarItem>
    </NavbarContainer>
  );
}