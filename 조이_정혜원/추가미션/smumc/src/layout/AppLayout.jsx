import * as S from "./AppLayout.style";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/index";

const AppLayout = () => {
  return (
    <S.Container>
      <Navbar />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
      <Footer />
    </S.Container>
  );
};

export default AppLayout;
