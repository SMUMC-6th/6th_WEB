import React from "react";
import * as S from "./SearchItemsContainer.style";
import MovieItem from "../../../components/MovieItem/MovieItem";

export default function SearchItemsContainer({ searchKeyword, searchItems }) {
  return (
    <S.SearchItemsContainer>
      {searchItems.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          overview={movie.overview}
          poster={movie.poster_path}
          title={movie.title}
          voteAverage={movie.vote_average}
          originalTitle={movie.original_title}
          width={20}
          height={100}
        />
      ))}
    </S.SearchItemsContainer>
  );
}
