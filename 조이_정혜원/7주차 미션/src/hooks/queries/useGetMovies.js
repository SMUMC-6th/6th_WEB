import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../api/post";
import queryClient from "../../api/queryClient";

const useGetMovies = (requestURL, page) => {
  return useQuery({
    queryKey: ["movies", requestURL, page],
    queryFn: () => getMovies(requestURL, page),
    keepPreviousData: true,
    staleTime: 10 * 1000,
  });
};

export default useGetMovies;
