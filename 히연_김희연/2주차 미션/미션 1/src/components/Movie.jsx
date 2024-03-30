import React, { useState } from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="movie-container"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      {isHover && (
        <div className="movie-wrapper">
          <div className="movie-box">
            <br />
            <h4 className="movie-title">{title}</h4>
            <br />
            <div className="movie-explain">{overview}</div>
          </div>
        </div>
      )}
    </div>
  );
}
