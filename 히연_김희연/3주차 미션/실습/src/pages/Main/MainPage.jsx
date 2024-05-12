import React from "react";
import * as S from "./MainPage.style";
import { IoSearchCircle } from "react-icons/io5";

const MainPage = () => {
  return (
    <S.Container>
      <S.Top>환영합니다</S.Top>
      <S.Bottom>
        <S.Content>
          <S.Search>📽️ Find your movies !</S.Search>
          <S.InputContainer>
            <S.Input></S.Input>
            <IoSearchCircle size="35" color="#FFCD25" />
          </S.InputContainer>
        </S.Content>
      </S.Bottom>
    </S.Container>
  );
};

export default MainPage;
