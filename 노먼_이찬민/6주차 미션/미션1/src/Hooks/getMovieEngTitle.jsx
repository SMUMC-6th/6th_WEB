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
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
      },
    };

    async function getMoviesAPI() {
      setIsLoading(true); // 로딩 시작
      try {
        // fetch는 500, 404같은 오류상태코드를 이해하지 못함. -> 분기추가하거나 axios 사용하기
        const movies = await fetch(
          // 쿼리파라미터 인자는 상태값으로 변경하면 좋음.
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

export { getMovieEngTitle }; // 컴포넌트로 이 함수를 내보냄. 이후에 => 하나로 받고 구조분해하기
