import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Movie.style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Movie({ movie }) {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const {
    poster_path,
    title,
    vote_average,
    overview,
    original_title,
    release_date,
  } = movie;

  const handleMovieClick = () => {
    navigate(`/movie/${original_title}`, { state: { ...movie } });
  };

  return (
    <S.MovieContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleMovieClick}
    >
      <S.MovieImage src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <S.MovieInfo>
        <h4>{title}</h4>
        <span>⭐️{vote_average}</span>
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
