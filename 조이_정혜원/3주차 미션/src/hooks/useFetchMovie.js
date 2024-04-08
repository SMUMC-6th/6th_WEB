import { useState, useEffect } from "react";
import movieAxios from "../api/axios";

const useFetchMovie = (requestURL) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // 보통 처음에는 false 데이터 받을 때 true로 변경
  const [error, setError] = useState(false);

  const fetchMovieData = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await movieAxios(requestURL);
      setMovies(res.data.results);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, [requestURL]);

  return { movies, loading, error };
};

export default useFetchMovie;
