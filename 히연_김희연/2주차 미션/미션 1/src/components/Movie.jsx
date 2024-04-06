import React, { useState } from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
const DEFAULT_IMG =
  "https://img.freepik.com/free-vector/3d-realistic-illustration-of-open-movie-clapperboard-or-clapper-isolated-on-background_1441-1783.jpg"; // 기본 이미지 URL

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [isHover, setIsHover] = useState(false);

  const imageUrl = poster_path ? IMG_BASE_URL + poster_path : DEFAULT_IMG;

  return (
    <div
      className="movie-container"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={imageUrl} alt="영화 포스터" />
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
