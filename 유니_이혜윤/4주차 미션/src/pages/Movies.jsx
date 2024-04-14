import { useState, useEffect } from 'react';
import * as MP from "./MoviePage.style"
import Loading from './Loading';
import MovieList from './MovieList';

const Movies = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TOKEN, // 환경 변수에서 토큰 가져오기
      },
    };

    // URL에 type을 동적으로 삽입
    const url = `https://api.themoviedb.org/3/movie/${type}?language=ko&page=2`;

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      });
  }, [type]); // 의존성 배열에 type 추가

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <MP.Container>
        <MP.Movielist>
          {movies.map(movie => (
            // 아래에서 MovieList 컴포넌트를 사용하여 각 영화를 렌더링
            <MovieList key={movie.id} movie={movie} />
          ))}
        </MP.Movielist>
      </MP.Container>
    );
  }
};

export default Movies;
