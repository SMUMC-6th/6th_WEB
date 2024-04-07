import React, { useState } from "react";
import * as S from "./Movie.style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <S.MovieContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <S.MovieImage src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <S.MovieInfo>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </S.MovieInfo>
      {isHover && (
        <S.MovieWrapper>
          <S.MovieBox>
            <br />
            <h4 className="movie-title">{title}</h4>
            <br />
            <S.MovieExplain>{overview}</S.MovieExplain>
          </S.MovieBox>
        </S.MovieWrapper>
      )}
    </S.MovieContainer>
  );
}
