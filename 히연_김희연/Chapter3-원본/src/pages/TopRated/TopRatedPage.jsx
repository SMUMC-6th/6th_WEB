import Movie from "../../components/Movie";

import { getMoviesData } from "../../hooks/getMoviesData";

const TopRatedPage = () => {
  const { movies } = getMoviesData("top_rated");
  // console.log(import.meta.env.VITE_MOVIE_TOKEN);
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
