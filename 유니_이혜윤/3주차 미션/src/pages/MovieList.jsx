import React, { useState } from 'react';
import * as MP from "./MoviePage.style"
import { FaStar } from "react-icons/fa";

function MovieList({movie}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MP.Content
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
      <MP.Info>
          <h3>{movie.title}</h3>
          <div><span><FaStar /></span>{movie.vote_average}</div>
      </MP.Info>

      {isHovered && (
        <MP.MovieOverview>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </MP.MovieOverview>
      )}
    </MP.Content>
  );
}

export default MovieList;
