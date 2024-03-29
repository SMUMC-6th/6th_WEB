import { useState } from "react";
import { movies } from './api.js';


function MovieList({movie}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="movielist" 
      key={movie.id} 
      onMouseEnter={() => setIsHovered(true)} // 마우스가 올라갔을 때
      onMouseLeave={() => setIsHovered(false)} // 마우스가 내려갔을 때
    >
      {isHovered ? (
        // 마우스를 올렸을 때 보여줄 내용
        <div className="movie-overview">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ) : (
        // 마우스를 올리지 않았을 때 기본으로 보여줄 내용
        <div>
          <img src={ `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` } alt={movie.title}></img>
          <div className="content">
            <h2>{movie.title}</h2>
            <p className="avg">{movie.vote_average}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export { MovieList };