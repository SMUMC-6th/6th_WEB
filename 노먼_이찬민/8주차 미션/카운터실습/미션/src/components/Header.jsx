import React from "react";
import * as S from "./Header.style";
import { useSelector } from "react-redux";

function Header() {
  const count = useSelector((state) => state.counter.count);
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>UMC Redux-Toolkit 카운터 실습 : {count}</S.HeaderTitle>
    </S.HeaderContainer>
  );
}

export default Header;
