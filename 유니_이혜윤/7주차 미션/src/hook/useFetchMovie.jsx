import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchMovies = async ({ queryKey }) => {
  const [_key, { type, page }] = queryKey;
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
  const { data, error, isLoading } = useQuery(['movies', { type, page: currentPage }],
    fetchMovies,
    { keepPreviousData: false }
  );
  
  const totalPages = data?.total_pages || 1;

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return { isLoading, data, error, currentPage, totalPages, nextPage, prevPage };
};

export default useFetchMovie;
