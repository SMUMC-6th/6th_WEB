import * as S from "./SearchMovies.style";
import Movie from "../Movie";
import Loading from "../../Loading/Loading";
import SearchError from "../../Error/SearchError/SearchError";
import useFetchSearchMovie from "../../../hooks/useFetchSearchMovie";

const SearchMovies = ({ search }) => {
  const { loading, error, searchResults } = useFetchSearchMovie(search);

  if (loading) {
    return (
      <S.NoResultContainer>
        <Loading />
      </S.NoResultContainer>
    );
  }

  if (error) {
    return (
      <S.NoResultContainer>
        <SearchError />
      </S.NoResultContainer>
    );
  }

  if (searchResults.length === 0) {
    return (
      <S.NoResultContainer>
        <S.TextBox>
          <S.Icon />
          <div>"{search}"에 맞는 영화가 없습니다.</div>
        </S.TextBox>
      </S.NoResultContainer>
    );
  } else {
    return (
      <S.Container>
        {searchResults.map((movie) => (
          <S.Wrapper key={movie.id}>
            <Movie movie={movie} />
          </S.Wrapper>
        ))}
      </S.Container>
    );
  }
};

export default SearchMovies;
