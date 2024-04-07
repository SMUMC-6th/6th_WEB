import { useNavigate } from "react-router-dom";
import * as N from "./Navbar.style";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const nav = useNavigate();

  // TODO: 클릭되면 그 path에서 색 변경
  return (
    <N.Container>
      <img src={Logo} onClick={() => nav("/")} />
      <N.NavContainer>
        <span>회원가입</span>
        <span onClick={() => nav("/popular")}>Popular</span>
        <span onClick={() => nav("/now")}>Now Playing</span>
        <span onClick={() => nav("/top-rated")}>Top Rated</span>
        <span onClick={() => nav("/up-coming")}>UpComing</span>
      </N.NavContainer>
    </N.Container>
  );
};

export default Navbar;
