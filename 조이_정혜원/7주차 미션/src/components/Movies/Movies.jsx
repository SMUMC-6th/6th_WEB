import Movie from "./Movie";
import useFetchMovie from "../../hooks/useFetchMovie";
import ErrorComponent from "../Error/ErrorComponent";
import Loading from "../Loading/Loading";
import * as M from "./Movies.style";

const Movies = ({ requestURL }) => {
  const { movies, loading, error } = useFetchMovie(requestURL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <M.Container>
      <M.MovieContainer>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </M.MovieContainer>
    </M.Container>
  );
};

export default Movies;
