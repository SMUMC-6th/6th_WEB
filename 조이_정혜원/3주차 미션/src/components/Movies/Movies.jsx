import { useState, useEffect } from "react";
import Movie from "./Movie";
import movieAxios from "../../api/axios";
import Loading from "../Loading/Loading";

import * as M from "./Movies.style";

const Movies = ({ requestURL }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // 보통 처음에는 false 데이터 받을 때 true로 변경

  //TODO: 에러처리
  const fetchMovieData = async () => {
    setLoading(true);
    try {
      const res = await movieAxios.get(requestURL);
      setMovies(res.data.results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
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
