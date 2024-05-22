import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getMovies } from "../../api/post";

const useGetMovies = (requestURL, page) => {
  return useQuery({
    queryKey: ["movies", requestURL, page],
    queryFn: () => getMovies(requestURL, page),
    placeholderData: keepPreviousData,
    staleTime: 10 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};

export default useGetMovies;
