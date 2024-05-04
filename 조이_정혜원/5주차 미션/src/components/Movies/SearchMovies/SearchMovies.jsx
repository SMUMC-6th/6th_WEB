import { useEffect, useState } from "react";
import * as S from "./SearchMovies.style";
import { SearchAxios } from "../../../api/axios";
import Movie from "../Movie";
import Loading from "../../Loading/Loading";
import SearchError from "../../Error/SearchError/SearchError";

const SearchMovies = ({ search }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const controller = new AbortController();

  const fetchSearchMovies = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await SearchAxios(
        {
          params: {
            query: search,
          },
        },
        { signal: controller.signal },
      );
      setSearchResults(res.data.results);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchMovies();

    return () => {
      controller.abort();
    };
  }, [search]);

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
          <S.Wrapper>
            <Movie movie={movie} />
          </S.Wrapper>
        ))}
      </S.Container>
    );
  }
};

export default SearchMovies;
