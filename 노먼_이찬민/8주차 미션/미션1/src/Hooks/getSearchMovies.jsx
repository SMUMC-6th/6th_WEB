import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function getSearchMovies(searchKeyword) {
  const [searchItems, setSearchItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
    },
  };

  async function getSearchMoviesAPI(keyword) {
    try {
      setIsLoading(true);
      const searchResult = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          keyword
        )}&include_adult=false&language=ko-KR`,
        options
      );
      const searchData = await searchResult.json();
      setSearchItems(searchData.results);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getSearchMoviesAPI(searchKeyword);
  }, [searchKeyword]);

  return { searchItems, isLoading, isError };
}
