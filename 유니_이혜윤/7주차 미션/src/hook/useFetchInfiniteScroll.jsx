import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

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

const useFetchInfiniteScroll = (type) => {
  const {data, error, fetchNextPage, hasNextPage, isFetching, isLoading} 
  = useInfiniteQuery({
    queryKey: ['movies', {type}],
    queryFn: ({pageParam}) => fetchMovies({type, page: pageParam}),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page+1,
  })

  const movieData = data?.pages.flatMap((page) => page.results) || [];
  const totalPages = data?.pages[data.pages.length - 1]?.total_pages || 1;

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return { isLoading, movieData, error, loadMore: fetchNextPage, hasNextPage, isFetching, totalPages};
};

export default useFetchInfiniteScroll;