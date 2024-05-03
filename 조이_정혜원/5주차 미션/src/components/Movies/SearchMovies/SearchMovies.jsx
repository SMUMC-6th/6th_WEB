import { useEffect, useState } from "react";
import * as S from "./SearchMovies.style";
import { SearchAxios } from "../../../api/axios";
import Movie from "../Movie";

const SearchMovies = ({ search }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchMovies = async () => {
    setLoading(true);

    try {
      const res = await SearchAxios({
        params: {
          query: search,
        },
      });
      setSearchResults(res.data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchMovies();
  }, [search]);

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
