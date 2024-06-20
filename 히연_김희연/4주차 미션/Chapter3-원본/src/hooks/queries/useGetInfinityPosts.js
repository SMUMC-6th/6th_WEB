import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "../../api";

function useGetInfinityPosts(category) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getMovies(category, pageParam),
    queryKey: ["movies", category],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      //console.log("라스트", lastPage, "올", allPages);
      const lastPost = lastPage.results[lastPage.results.length - 1];

      return lastPost ? allPages?.length + 1 : undefined;
    },
    staleTime: 60 * 1000,
    select: (data) => data.pages,
    keepPreviousData: true,
  });
}

export default useGetInfinityPosts;
