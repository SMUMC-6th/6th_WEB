import { useState, useEffect } from "react";
import Movie from "./Movie";
import movieAxios from "../../api/axios";
import Loading from "../Loading/Loading";

import * as M from "./Movies.style";

const Movies = ({ requestURL }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovieData = async () => {
    setLoading(true);
    const res = await movieAxios.get(requestURL);
    setMovies(res.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovieData();

    // TODO: return
  }, [requestURL]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <M.Container>
        <M.MovieContainer>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </M.MovieContainer>
      </M.Container>
    );
  }
};

export default Movies;
