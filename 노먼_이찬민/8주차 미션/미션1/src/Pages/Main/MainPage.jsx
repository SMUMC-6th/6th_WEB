import { useEffect, useState } from "react";
import * as S from "./MainPage.styled";
import getSearchMovies from "../../Hooks/getSearchMovies";
import MovieItem from "../../components/MovieItem/MovieItem";
import SearchItemsContainer from "./components/SearchItemsContainer";
import useDebounce from "../../Hooks/useDebounce";

const MainPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResultItems, setSearchResultItems] = useState([]);

  const changeHandler = (e) => {
    setSearchKeyword(e.target.value);
  };

  // usedebounce 와 getSearchMovies의 coupling(결합도) 낮추기
  const debouncedSearchKeyword = useDebounce(searchKeyword, 100);
  const { searchItems, isLoading } = getSearchMovies(debouncedSearchKeyword);

  return (
    <S.Container>
      <S.TopWrapper>
        {/* 7주차 피드백 - 로그인 시에만 뜨게 함 */}
        {localStorage.getItem("myUsername") !== null
          ? `환영합니다 {localStorage.getItem("myUsername")}님!`
          : "환영합니다"}
      </S.TopWrapper>
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
            searchKeyword={debouncedSearchKeyword}
            searchItems={searchItems}
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
