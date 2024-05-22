import React from "react";
import {
  HomeMovieContainer,
  HomeMovieInfo,
  HomeImg,
  HomeDiv,
} from "../style/Searchmovie.style";
import { useNavigate } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function HomeMovie({
  title,
  poster_path,
  vote_average,
  overview,
  movieId,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(movieId);
    navigate(`/MovieDetail/${movieId}`, {
      state: { title, poster_path, vote_average, overview, movieId },
    });
  };

  return (
    <HomeDiv>
      <HomeMovieContainer>
        <HomeImg
          src={IMG_BASE_URL + poster_path}
          alt="영화포스터"
          onClick={handleClick}
        />

        <HomeMovieInfo>
          <h4>{title}</h4>
          <span>{vote_average.toFixed(1)}</span>
        </HomeMovieInfo>
      </HomeMovieContainer>
    </HomeDiv>
  );
}