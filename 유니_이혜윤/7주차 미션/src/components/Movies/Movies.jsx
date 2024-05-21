import * as MP from "./MoviePage.style"
import Loading from '../Loading/Loading';
import MovieList from './MovieList';
import useFetchMovie from '../../hook/useFetchMovie';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Movies = ({ type }) => {
  const { isLoading, data, error, currentPage, totalPages, nextPage, prevPage } = useFetchMovie(type);

  if (isLoading) {
    return <Loading />;
  } 
  
  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <MP.Container>
      <MP.ListContainer>
        <MP.Movielist>
          {data.results.map(movie => (
            // 아래에서 MovieList 컴포넌트를 사용하여 각 영화를 렌더링
            <MovieList key={movie.id} movie={movie} />
          ))}
        </MP.Movielist>
      </MP.ListContainer>
      <MP.Pagination>
        <button onClick={prevPage} disabled={currentPage === 1}><MdNavigateBefore color="white" size="30px"/></button>
        <span>{currentPage}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}><MdNavigateNext color="white" size="30px"/></button>
      </MP.Pagination>
    </MP.Container>
    );
  }

export default Movies;