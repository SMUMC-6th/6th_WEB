import { useEffect, useState } from "react";
import * as S from "./Pages.styled";
import MovieItem from "../components/MovieItem/MovieItem";
import { getMovies } from "../Hooks/getMovies";

const PopularPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // 한페이지에 20개씩
  const [PageButtonDisable, setPageButtonDisable] = useState(true);
  const { movieItems, isLoading } = getMovies("popular", "ko-KR", currentPage);

  return (
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
      <S.PagenationBar>
        <S.PageControlButton
          onClick={() => {
            currentPage === 1 ? 0 : setCurrentPage((prev) => prev - 1);
            currentPage === 1 ? setPageButtonDisable(true) : 0;
          }}
          disabled={PageButtonDisable}
        >
          <S.PrevIcon color={currentPage === 1 ? "gray" : "azure"}></S.PrevIcon>
        </S.PageControlButton>
        <div>{currentPage}</div>
        <S.PageControlButton
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            setPageButtonDisable(false);
          }}
        >
          <S.NextIcon color={"azure"}></S.NextIcon>
        </S.PageControlButton>
      </S.PagenationBar>
    </S.Container>
  );
};

export default PopularPage;
