import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./Navbar.style";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const nav = useNavigate();
  const { nowTheme, changeClick } = useContext(ThemeContext);

  return (
    <S.Container>
      <h3 onClick={() => nav("/")}>SMUMC</h3>

      <S.Wrapper>
        {nowTheme ? <S.DarkIcon onClick={changeClick} /> : <S.Lighticon onClick={changeClick} />}
        <NavLink to="/projects">project</NavLink>
        <NavLink to="/members">member</NavLink>
        <NavLink to="/notices">notice</NavLink>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
