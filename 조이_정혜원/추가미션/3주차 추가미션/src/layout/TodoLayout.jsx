import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

import * as S from "./TodoLayout.style";

const TodoLayout = () => {
  return (
    <S.Container>
      <S.Content>
        <Header />
        <S.OutletWrapper>
          <Outlet />
        </S.OutletWrapper>
        <Footer />
      </S.Content>
    </S.Container>
  );
};

export default TodoLayout;
