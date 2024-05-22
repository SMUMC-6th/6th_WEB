import React, { useState } from "react";
import { Hoverbox, MovieContainer, MovieInfo } from "../style/Movie.style";
import { useNavigate } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({
  title,
  poster_path,
  vote_average,
  overview,
  movieId,
  release_date,
}) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/MovieDetail/${movieId}`, {
      state: { title, poster_path, vote_average, overview, movieId, release_date },
    });
  };

  return (
    <div>
      <MovieContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={IMG_BASE_URL + poster_path}
          alt="영화포스터"
        />

        {isHovered && (
          <Hoverbox
            onClick={handleClick}
          >
            <h1>{title}</h1>
            <p>
              {overview
                ? overview
                : "줄거리 정보가 없습니다. 업데이트를 기다려 주세요."}
            </p>
          </Hoverbox>
        )}

        <MovieInfo>
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </MovieInfo>
      </MovieContainer>
    </div>
  );
}