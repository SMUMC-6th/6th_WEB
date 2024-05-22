import { useEffect, useState } from "react";

function getMovieDetails(id) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        // .env에 토큰 명시할때 띄어쓰기는 쓰지 않기. + 어떤 토큰을 사용하는 지는 .env가 아니라 여기에서 사용
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
      },
    };

    async function getMoviesAPI() {
      setIsLoading(true); // 로딩 시작
      try {
        const movies = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );
        const data = await movies.json();
        const details = data; // API 데이터의 result 배열 그대로 복사
        setMovieDetails(details);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesAPI();
  }, [id]);

  return { movieDetails, isLoading, isError };
}

export { getMovieDetails }; // 이것들이 하나로 묶어서 보내짐 => 하나로 받고 구조분해하기
