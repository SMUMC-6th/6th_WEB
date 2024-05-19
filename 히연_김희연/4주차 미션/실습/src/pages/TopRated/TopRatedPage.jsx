import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import * as S from "./TopRatedPage.style";

import { getMoviesData } from "../../hooks/getMovieData";

const PopularPage = () => {
  const { movies, loading } = getMoviesData("popular");

  if (loading) {
    return (
      <S.Loading>
        <RingLoader color="#36d7b7" size="80px" />
      </S.Loading>
    );
  }
  return (
    <div className="app-container">
      {movies.map((item) => {
        return (
          <Link to={`/movie/${item.id}`} key={item.id}>
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default PopularPage;
