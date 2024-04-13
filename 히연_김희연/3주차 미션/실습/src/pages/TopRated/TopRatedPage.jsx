import Movie from "../../components/Movie";
import * as S from "./TopRated.style";
import { RingLoader } from "react-spinners";

import { getMoviesData } from "../../hooks/getMoviesData";

const TopRatedPage = () => {
  const { movies, loading } = getMoviesData("top_rated");

  if (loading) {
    return (
      <S.Loading>
        <RingLoader color="#36d7b7" size="80px" />
      </S.Loading>
    );
  }

  return (
    <div className="app-container">
      {movies.map((item, idx) => {
        return (
          <Movie
            key={idx}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </div>
  );
};

export default TopRatedPage;
