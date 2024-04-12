import React from "react";
import { useState, useEffect } from "react";

function getMovies(category) {
  const [movieItems, setMovieItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_MOVIE_API_KEY,
      },
    };

    async function getMoviesAPI() {
      setIsLoading(true); // 로딩 시작
      try {
        const movies = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`,
          options
        );
        const data = await movies.json();
        const movieList = data.results; // API 데이터의 result 배열 그대로 복사
        setMovieItems(movieList);
        setIsLoading(false); // 로딩 종료
      } catch (error) {
        console.error(error);
      }
    }

    getMoviesAPI();
  }, [category]);

  return { movieItems, isLoading };
}

export { getMovies }; // 이것들이 하나로 묶어서 보내짐 => 하나로 받고 구조분해하기
