import { useState, useEffect } from "react";
import { movieAxios } from "../api/axios";

const useFetchMovie = (requestURL, page) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // 보통 처음에는 false 데이터 받을 때 true로 변경
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  const controller = new AbortController();

  const fetchMovieData = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await movieAxios(
        requestURL,
        {
          params: {
            page: page,
          },
        },
        { signal: controller.signal },
      );
      setMovies(res.data.results);
      setTotalPage(res.data.total_pages);
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
  }, [requestURL, page]);

  return { movies, loading, error, totalPage };
};

export default useFetchMovie;
