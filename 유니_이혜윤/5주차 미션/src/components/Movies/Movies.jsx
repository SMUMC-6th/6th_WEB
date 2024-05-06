import { useState, useEffect } from 'react';
import * as MP from "./MoviePage.style"
import Loading from '../Loading/Loading';
import MovieList from './MovieList';
import axios from 'axios';

const Movies = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${type}?language=ko&page=2`;

        const response = await axios.get(url, {  // axios.get 사용
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`, // 환경 변수에서 토큰 가져오기
          },
        });

        if (!response.data) {
          throw new Error('No data received');
        }

        setMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [type]);

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