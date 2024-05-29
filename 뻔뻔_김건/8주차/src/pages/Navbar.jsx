import { useState } from "react";
import {
  NavbarContainer,
  LogoBox,
  NavbarItem,
  LinkPage,
  Button,
  Hamburger,
  Menu,
} from "../style/Navbar.style";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.value.token);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutAction());
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <LogoBox>
        <LinkPage to="/">
          <h1>UMC Movie</h1>
        </LinkPage>
      </LogoBox>
      <Hamburger onClick={toggleMenu}>
        ☰
      </Hamburger>
      <Menu open={menuOpen}>
        <NavbarItem>
          {accessToken ? (
            <Button onClick={handleLogout}>로그아웃</Button>
          ) : (
            <>
              <LinkPage to="/Login" onClick={handleLinkClick}>
                <h1>로그인</h1>
              </LinkPage>
              <LinkPage to="/SignUp" onClick={handleLinkClick}>
                <h1>회원가입</h1>
              </LinkPage>
            </>
          )}
          <LinkPage to="/Popular" onClick={handleLinkClick}>
            <h1>Popular</h1>
          </LinkPage>
          <LinkPage to="/NowPlaying" onClick={handleLinkClick}>
            <h1>Now Playing</h1>
          </LinkPage>
          <LinkPage to="/TopRates" onClick={handleLinkClick}>
            <h1>Top Rated</h1>
          </LinkPage>
          <LinkPage to="/Upcoming" onClick={handleLinkClick}>
            <h1>UpComing</h1>
          </LinkPage>
        </NavbarItem>
      </Menu>
    </NavbarContainer>
  );
}
