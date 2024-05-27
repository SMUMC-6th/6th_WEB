import axios from "axios";
import { useState, useEffect } from "react";

const getSearchData = (search) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=ko&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_TOKEN}`,
    },
  };

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios(url, options);
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [search]);

  return { movies, loading, error };
};

export { getSearchData };
