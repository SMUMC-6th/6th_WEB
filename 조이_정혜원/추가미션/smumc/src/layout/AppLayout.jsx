import * as S from "./AppLayout.style";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
import { useContext } from "react";
import { ThemeContext } from "../context";

const AppLayout = () => {
  const { nowTheme, changeClick } = useContext(ThemeContext);

  return (
    <S.Container>
      <Navbar />
      <S.ContentWrapper>
        <Outlet />
        <S.ThemeIcon onClick={changeClick}>{nowTheme ? <S.Dark /> : <S.Tree />}</S.ThemeIcon>
      </S.ContentWrapper>
      <Footer />
    </S.Container>
  );
};

export default AppLayout;
