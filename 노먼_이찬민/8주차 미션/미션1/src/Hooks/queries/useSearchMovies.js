import useDebounce from "../useDebounce";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getSearchMovies from "../getSearchMovies";

export default function useSearchMovies(searchKeyword) {
  return useQuery({
    queryFn: ({ searchKeyword }) => {
      return getSearchMovies(searchKeyword);
    },
    queryKey: ["searchMovies", searchKeyword],
  });
}
