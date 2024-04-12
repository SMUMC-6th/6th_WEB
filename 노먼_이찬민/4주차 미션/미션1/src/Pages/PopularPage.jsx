import { useEffect, useState } from "react";
import * as S from "./Pages.styled";
import MovieItem from "../components/MovieItem";
import { getMovies } from "../Hooks/getMovies";

const PopularPage = () => {
  const { movieItems, isLoading } = getMovies("popular");

  return (
    // 로딩 스피너를 구현하긴 했는데, 너무 빨라서 안보임 ㅋㅋㅋㅋㅋㅋ
    <S.Container>
      {isLoading && <S.Spinner></S.Spinner>}
      {movieItems.map((movie) => (
        // movie 매개변수로 movieItems를 받아옴과 동시에 순회하며 새로운 배열 생성하기, key는 영화의 id로 설정한다
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

export default PopularPage;
