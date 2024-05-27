import axios from 'axios';
import { useState, useEffect } from 'react';

const getMoviesData = (category) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
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
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [category]);

  return { movies, loading, error };
};

export { getMoviesData };
