import React, { useState, useEffect } from 'react';
import * as MP from "./MoviePage.style"
import { FaStar } from "react-icons/fa";
import Loading from './Loading';

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
    const url = `https://api.themoviedb.org/3/movie/${type}?language=ko&page=1`;

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
            <MP.Content key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <MP.Info>
                <h3>{movie.title}</h3>
                <div><span><FaStar /></span>{movie.vote_average}</div>
              </MP.Info>
            </MP.Content>
          ))}
        </MP.Movielist>
      </MP.Container>
    );
  }
};

export default Movies;
