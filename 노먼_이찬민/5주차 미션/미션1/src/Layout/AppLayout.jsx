import * as S from "./AppLayout.style";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  // Outlet 위치에 내가 지정한 Router가 작동한다.
  return (
    <S.AppContainer>
      <Navbar />
      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>
      <Footer />
    </S.AppContainer>
  );
}

export default AppLayout;
