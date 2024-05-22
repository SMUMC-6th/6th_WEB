import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetchInfiniteScroll = (type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

    const fetchMovies = useCallback(async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = `https://api.themoviedb.org/3/movie/${type}?language=ko&page=${currentPage}`;

        const response = await axios.get(url, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        });

        if (!response.data) {
          throw new Error('No data received');
        }

        setMovieData(prevData => [...prevData, ...response.data.results]);
        setTotalPages(response.data.total_pages);
        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      }
     }, [type, currentPage]);

    useEffect(()=>{
      fetchMovies();
    }, [fetchMovies]);

  const loadMore = () => {
    if(currentPage < totalPages){
      setCurrentPage(prevPage => prevPage +1);
    }
  };

  return { isLoading, movieData, error, loadMore};
};

export default useFetchInfiniteScroll;