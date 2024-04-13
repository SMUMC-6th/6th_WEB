import { useEffect, useState } from "react";
import * as S from "./Pages.styled";
import MovieItem from "../components/MovieItem";
import { Link } from "react-router-dom";
import { getMovies } from "../Hooks/getMovies";

const NowPlayingPage = () => {
  const { movieItems, isLoading } = getMovies("now_playing");

  return (
    // 로딩 스피너를 구현하긴 했는데, 너무 빨라서 안보임 ㅋㅋㅋㅋㅋㅋ
    <S.Container>
      {isLoading && <S.Spinner></S.Spinner>}
      {movieItems.map((movie) => (
        // movie 매개변수로 movieItems를 받아옴과 동시에 순회하며 새로운 배열 생성하기
        // movieItems 배열에는 key, poster, title, voteAverage속성이 있음.
        <MovieItem
          key={movie.id}
          id={movie.id}
          overview={movie.overview}
          poster={movie.poster_path}
          title={movie.title}
          voteAverage={movie.vote_average}
          originalTitle={movie.original_title}
        />
      ))}
    </S.Container>
  );
};

export default NowPlayingPage;
