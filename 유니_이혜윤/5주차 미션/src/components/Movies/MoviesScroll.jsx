import * as MP from "./MoviePage.style"
import Loading from '../Loading/Loading';
import MovieList from './MovieList';
import useFetchInfiniteScroll from '../../hook/useFetchInfiniteScroll';
import { useEffect } from "react";

const MoviesScroll = ({ type }) => {
  const { isLoading, movieData, loadMore } = useFetchInfiniteScroll(type);

  useEffect(() => {
    const handleScroll = () => {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !isLoading){
        loadMore();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[isLoading, loadMore]);

  return (
    <>
      <MP.Container>
        <MP.Movielist>
          {movieData.map(movie => (
            // 아래에서 MovieList 컴포넌트를 사용하여 각 영화를 렌더링
            <MovieList key={movie.id} movie={movie} />
          ))}
        </MP.Movielist>
        {isLoading && <Loading />}
      </MP.Container>
    </>
    );
};

export default MoviesScroll;