import * as MP from "./MoviePage.style"
import Loading from '../Loading/Loading';
import MovieList from './MovieList';
import useFetchMovie from '../../hook/useFetchMovie';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Movies = ({ type }) => {
  const { isLoading, movieData, currentPage, totalPages, nextPage, prevPage } = useFetchMovie(type);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <MP.Container>
          <MP.Movielist>
            {movieData.results.map(movie => (
              // 아래에서 MovieList 컴포넌트를 사용하여 각 영화를 렌더링
              <MovieList key={movie.id} movie={movie} />
            ))}
          </MP.Movielist>
        </MP.Container>
        <MP.Pagination>
          <button onClick={prevPage} disabled={currentPage === 1}><MdNavigateBefore color="white"/></button>
          <span>{currentPage}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages}><MdNavigateNext color="white"/></button>
        </MP.Pagination>
    </>
    );
  }
};

export default Movies;