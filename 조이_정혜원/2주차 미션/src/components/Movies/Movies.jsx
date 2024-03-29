import { useState, useEffect } from "react";
import { moviesData } from "../../api/movies";
import Movie from "./Movie";

import { Container } from "./Movies.style";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = () => {
    const res = moviesData;
    setMovies(res.results);
  };

  useEffect(() => {
    fetchMovieData();
  }, []); /* 일단 고정된 데이터라 의존성 배열 지정 x */

  return (
    <Container>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

export default Movies;
