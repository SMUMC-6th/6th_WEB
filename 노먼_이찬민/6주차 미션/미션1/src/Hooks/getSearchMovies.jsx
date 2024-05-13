import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function getSearchMovies(searchKeyword) {
  // console.log(searchKeyword);
  const [searchItems, setSearchItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const debounceSearchKeyword = useDebounce(searchKeyword, 500);
  // console.log("디바운스" + debounceSearchKeyword);

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
      // console.log(searchItems);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  // getSearchMoviesAPI(debounceSearchKeyword);
  useEffect(() => {
    getSearchMoviesAPI(debounceSearchKeyword);
    // console.log(debounceSearchKeyword, searchItems);
  }, [debounceSearchKeyword]);

  return { searchItems, isLoading, isError };
}
