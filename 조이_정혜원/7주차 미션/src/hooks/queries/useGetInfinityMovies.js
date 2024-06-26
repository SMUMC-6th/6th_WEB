import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "../../api/post";

const useGetInfinityMovies = (requestURL) => {
  return useInfiniteQuery({
    queryKey: ["movies", requestURL],
    queryFn: ({ pageParam }) => getMovies(requestURL, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastPost = lastPage.results[lastPage.results.length - 1];
      return lastPost ? allPages?.length + 1 : undefined;
    },
    select: (data) => data.pages,
    placeholderData: keepPreviousData,
    staleTime: 10 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};

export default useGetInfinityMovies;
