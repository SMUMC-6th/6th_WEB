import React, { useState } from "react";
import * as S from "./MainPage.style";
import { IoSearchCircle } from "react-icons/io5";
import Search from "../../components/Search/Search";

const MainPage = () => {
  const [title, setTitle] = useState("");
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  return (
    <S.Container>
      <S.Top>환영합니다</S.Top>
      <S.Bottom>
        <S.Content>
          <S.Search>📽️ Find your movies !</S.Search>
          <S.InputContainer>
            <S.Input type="text" value={title} onChange={onChangeHandler} />
            <IoSearchCircle size="35" color="#FFCD25" />
          </S.InputContainer>
          <Search title={title} />
        </S.Content>
      </S.Bottom>
    </S.Container>
  );
};

export default MainPage;
