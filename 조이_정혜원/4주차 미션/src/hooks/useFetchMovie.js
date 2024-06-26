import { useState, useEffect } from "react";
import movieAxios from "../api/axios";

const useFetchMovie = (requestURL) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // 보통 처음에는 false 데이터 받을 때 true로 변경
  const [error, setError] = useState(false);

  const controller = new AbortController();

  const fetchMovieData = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await movieAxios(requestURL, { signal: controller.signal });
      setMovies(res.data.results);
    } catch (err) {
      if (err.name === "AbortError") {
        alert("AbortError");
      } else {
        console.log(err);
      }

      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieData();

    return () => {
      controller.abort();
    };
  }, [requestURL]);

  return { movies, loading, error };
};

export default useFetchMovie;
