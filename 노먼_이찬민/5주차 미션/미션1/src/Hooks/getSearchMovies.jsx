import React, { useEffect, useState } from "react";

export default function getSearchMovies(searchKeyword, isSubmitted) {
  console.log(searchKeyword, isSubmitted);
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
      },
    };

    async function getSearchMoviesAPI() {
      try {
        const searchResult = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&include_adult=true&language=en-US`,
          options
        );
        const searchData = await searchResult.json();
        setSearchItems(searchData.results);
        console.log("검색결과" + searchItems);
      } catch (error) {
        console.error(error);
      }
    }

    getSearchMoviesAPI();
  }, [searchKeyword, isSubmitted]);

  return { searchItems };
}
