import {
  NavbarContainer,
  LogoBox,
  NavbarItem,
  LinkPage,
  Button,
} from "../style/Navbar.style";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.value.token);
  console.log(accessToken);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <NavbarContainer>
      <LogoBox>
        <LinkPage to="/">
          <h1>UMC Movie</h1>
        </LinkPage>
      </LogoBox>
      <NavbarItem>
        {accessToken ? (
          <Button onClick={handleLogout}>로그아웃</Button>
        ) : (
          <>
            <LinkPage to="/Login">
              <h1>로그인</h1>
            </LinkPage>
            <LinkPage to="/SignUp">
              <h1>회원가입</h1>
            </LinkPage>
          </>
        )}
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
