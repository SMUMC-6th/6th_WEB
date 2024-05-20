import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovie = (type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const cancelRequest = false;

    const fetchMovies = async () => {
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

        if(!cancelRequest) {
          setMovieData(response.data);
          setTotalPages(response.data.total_pages);
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
  }, [type, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => {
      const nextPage = Math.min(prev+1, totalPages);
      if(nextPage !== prev) {
        window.scrollTo(0,0);  // 페이지 변경시 스크롤 위로
      }
      return nextPage;
    });
  }

  const prevPage = () => {
    setCurrentPage((prev) => {
      const prevPage = Math.max(prev - 1, 1);
      if(prevPage !== prev) {
        window.scrollTo(0,0);
      }
      return prevPage;
    })
  }

  return { isLoading, movieData, error, currentPage, totalPages, nextPage, prevPage};
};

export default useFetchMovie;