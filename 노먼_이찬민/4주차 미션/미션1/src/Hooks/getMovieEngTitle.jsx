import React from "react";
import { useState, useEffect } from "react";

function getMovieEngTitle(movieId) {
  const [movieEngTitle, setMovieEngTitle] = useState("");
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
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          options
        );
        const data = await movies.json();
        console.log(data.title);
        const movieEngTitle = data.title; // API 데이터 배열 그대로 복사
        setMovieEngTitle(movieEngTitle);
        setIsLoading(false); // 로딩 종료
      } catch (error) {
        console.error(error);
      }
    }

    getMoviesAPI();
  }, [movieId]); // props 전달로 변경되면 실행

  return { movieEngTitle, isLoading }; // 여러 속성의 객체로 반환
}

export { getMovieEngTitle }; // 이것들이 하나로 묶어서 보내짐 => 하나로 받고 구조분해하기
