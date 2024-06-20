import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api";

function useGetPosts(category, pageParams) {
  return useQuery({
    queryFn: () => getMovies(category, pageParams),
    queryKey: ["movies", category],
  });
}

export default useGetPosts;
