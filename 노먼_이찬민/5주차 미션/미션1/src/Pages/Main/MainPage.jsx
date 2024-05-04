import { useEffect, useState } from "react";
import * as S from "./MainPage.styled";
import getSearchMovies from "../../Hooks/getSearchMovies";
import MovieItem from "../../components/MovieItem/MovieItem";

const MainPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResultItems, setSearchResultItems] = useState([]);
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(0);

  // 지금 입력창에 검색어를 한번 -> 서브밋핸들러 작동 , 두번 -> 서치 훅 작동, 세번 -> 메인페이지 useEffect 작동...
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchKeyword(e.target[0].value);
    console.log(e.target[0].value, "서치키워드" + searchKeyword);
    setIsSearchSubmitted(isSearchSubmitted + 1);
  };

  const { searchItems } = getSearchMovies(searchKeyword, isSearchSubmitted);
  useEffect(() => {
    setSearchResultItems(searchItems);
    console.log(isSearchSubmitted, searchResultItems);
  }, [, isSearchSubmitted]);

  return (
    <S.Container>
      <S.TopWrapper>환영합니다</S.TopWrapper>
      <S.BottomFormWrapper onSubmit={(e) => submitHandler(e)}>
        <S.SearchLabel>🔍 Find your movies !</S.SearchLabel>
        <S.SearchInput
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value);
            // console.log(e.target.value, searchKeyword);
          }}
        ></S.SearchInput>
        {/* state와 같은 이름으로 스타일 컴포넌트 커스텀 속성을 사용할때는 앞에 $를 붙여서 사용하는것으로 해결한다 */}
        <S.searchItemsContainer $isSearchSubmitted={isSearchSubmitted}>
          {searchResultItems.length &&
            searchItems.map((movie) => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                overview={movie.overview}
                poster={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                originalTitle={movie.original_title}
                width={20}
                height={100}
              />
            ))}
        </S.searchItemsContainer>
      </S.BottomFormWrapper>
    </S.Container>
  );
};

export default MainPage;
