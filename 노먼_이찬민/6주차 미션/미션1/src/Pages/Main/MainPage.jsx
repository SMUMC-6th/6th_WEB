import { useEffect, useState } from "react";
import * as S from "./MainPage.styled";
import getSearchMovies from "../../Hooks/getSearchMovies";
import MovieItem from "../../components/MovieItem/MovieItem";
import SearchItemsContainer from "./components/SearchItemsContainer";

const MainPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResultItems, setSearchResultItems] = useState([]);

  const changeHandler = (e) => {
    setSearchKeyword(e.target.value);
  };

  const { searchItems, isLoading } = getSearchMovies(searchKeyword);
  useEffect(() => {
    setSearchResultItems(searchItems);
  }, [searchItems]);

  return (
    <S.Container>
      <S.TopWrapper>환영합니다</S.TopWrapper>
      <S.BottomFormWrapper
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <S.SearchLabel>🔍 Find your movies !</S.SearchLabel>
        <S.SearchInput
          value={searchKeyword}
          onChange={(e) => changeHandler(e)}
        ></S.SearchInput>
        {searchKeyword.length !== 0 && (
          <SearchItemsContainer
            searchKeyword={searchKeyword}
            searchItems={searchResultItems}
          ></SearchItemsContainer>
        )}
        {isLoading && (
          <S.LoadingText> 로딩중입니다, 잠시만 기다려주세요... </S.LoadingText>
        )}
      </S.BottomFormWrapper>
    </S.Container>
  );
};

export default MainPage;
