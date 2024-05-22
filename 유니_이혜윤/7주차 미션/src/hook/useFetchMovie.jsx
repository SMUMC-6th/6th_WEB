import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchMovies = async ({ type, page }) => {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=ko&page=${page}`;
  const { data } = await axios.get(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
  });
  return data;
};

const useFetchMovie = (type) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchMovies({type, page: currentPage}),
    queryKey: ['movies', { type, page: currentPage }],
  });
  
  const totalPages = data?.total_pages || 1;

  const nextPage = () => {
    setCurrentPage((prev) => {
      const newPage = Math.min(prev + 1, totalPages);
      window.scrollTo(0,0);
      return newPage;
    })
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 1);
      window.scrollTo(0, 0); // Scroll to top
      return newPage;
    });
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, [currentPage]);

  return { isLoading, data, error, currentPage, totalPages, nextPage, prevPage };
};

export default useFetchMovie;
