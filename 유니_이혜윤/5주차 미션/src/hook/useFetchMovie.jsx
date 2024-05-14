import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovie = (type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancelRequest = false;

    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = `https://api.themoviedb.org/3/movie/${type}?language=ko&page=2`;

        const response = await axios.get(url, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        });

        if(!cancelRequest) {
          setMovieData(response.data);
          setIsLoading(false);
        }

        if (!response.data) {
          throw new Error('No data received');
        }

      } catch (error) {
        if(!cancelRequest){
          console.error('Error fetching data:', error);
          setError(error);
          setIsLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      
    }
  }, [type]);

  return { isLoading, movieData, error};
};

export default useFetchMovie;