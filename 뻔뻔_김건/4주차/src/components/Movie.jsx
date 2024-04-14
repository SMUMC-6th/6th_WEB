import React from "react";
import { MovieContainer, MovieInfo } from "./Movies.style";
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/MovieDetail/${title}`, {
      state: { title, poster_path, vote_average, overview, movieId, release_date },
    });
  };

  return (
    <div>
      <MovieContainer>
        <img
          src={IMG_BASE_URL + poster_path}
          alt="영화포스터"
          onClick={handleClick}
        />

        <MovieInfo>
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </MovieInfo>
      </MovieContainer>
    </div>
  );
}