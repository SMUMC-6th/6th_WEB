import { useState, useEffect } from "react";
import Movie from "./Movie";
import movieAxios from "../../api/axios";

import { Container } from "./Movies.style";

const Movies = ({ requestURL }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = async () => {
    const res = await movieAxios.get(requestURL);
    setMovies(res.data.results);
  };

  useEffect(() => {
    fetchMovieData();

    // TODO: return
  }, [requestURL]);

  return (
    <Container>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

export default Movies;
