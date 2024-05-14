import * as MP from "./MoviePage.style"
import Loading from '../Loading/Loading';
import MovieList from './MovieList';
import useFetchMovie from '../../hook/useFetchMovie';

const Movies = ({ type }) => {
  const { isLoading, movieData } = useFetchMovie(type);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <MP.Container>
        <MP.Movielist>
          {movieData.results.map(movie => (
            // 아래에서 MovieList 컴포넌트를 사용하여 각 영화를 렌더링
            <MovieList key={movie.id} movie={movie} />
          ))}
        </MP.Movielist>
      </MP.Container>
    );
  }
};

export default Movies;