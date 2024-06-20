import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import * as S from "../../pages/TopRated/TopRatedPage.style";

import { getSearchData } from "../../hooks/getSearchData";
import styled from "styled-components";

const Search = ({ title }) => {
  const { movies, loading } = getSearchData(title);

  if (loading) {
    return (
      <S.Loading>
        <RingLoader color="#36d7b7" size="80px" />
      </S.Loading>
    );
  }
  console.log(movies);
  return (
    <Container>
      {movies
        ? movies.map((item, idx) => {
            return (
              <Link to={`/movie/${idx}`} key={idx}>
                <Movie
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  overview={item.overview}
                />
              </Link>
            );
          })
        : ""}
    </Container>
  );
};
const Container = styled.div``;
export default Search;
