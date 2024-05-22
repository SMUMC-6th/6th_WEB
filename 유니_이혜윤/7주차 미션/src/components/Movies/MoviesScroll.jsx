import * as MP from "./MoviePage.style"
import Loading from '../Loading/Loading';
import MovieList from './MovieList';
import { useInView } from 'react-intersection-observer';
import useFetchInfiniteScroll from '../../hook/useFetchInfiniteScroll';
import { useEffect } from "react";

const MoviesScroll = ({ type }) => {
  const { isLoading, movieData, loadMore } = useFetchInfiniteScroll(type);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !isLoading) {
      loadMore();
    }
  },[inView, isLoading, loadMore]);

  return (
    <>
      <MP.Container>
        <MP.Movielist>
          {movieData.map(movie => (
            // 아래에서 MovieList 컴포넌트를 사용하여 각 영화를 렌더링
            <MovieList key={movie.id} movie={movie} />
          ))}
        </MP.Movielist>
        <div ref={ref}></div>
        {isLoading && <Loading />}
      </MP.Container>
    </>
    );
};

export default MoviesScroll;