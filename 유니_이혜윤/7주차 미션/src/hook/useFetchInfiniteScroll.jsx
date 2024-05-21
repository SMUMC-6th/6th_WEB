import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchMovies = async ({ type, pageParam = 1 }) => {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=ko&page=${pageParam}`;
  const { data } = await axios.get(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
  });
  return data;
};

const useFetchInfiniteScroll = (type) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, } 
  = useInfiniteQuery(['movies', type], ({pageParam = 1}) => fetchMovies({type, pageParam}),)

  return { isLoading, movieData: data, error, loadMore: fetchNextPage, hasNextPage ,isFetchingNextPage};
};

export default useFetchInfiniteScroll;