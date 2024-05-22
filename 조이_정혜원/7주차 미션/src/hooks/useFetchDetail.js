import { useState, useEffect } from "react";
import { movieAxios } from "../api/axios";

const useFetctDetail = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieData, setMovieData] = useState([]);

  const controller = new AbortController();

  const fetchMovieDetail = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await movieAxios(id, { signal: controller.signal });
      setMovieData(res.data);
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
    fetchMovieDetail();

    return () => {
      controller.abort();
    };
  }, [id]);

  return { loading, error, movieData };
};

export default useFetctDetail;
