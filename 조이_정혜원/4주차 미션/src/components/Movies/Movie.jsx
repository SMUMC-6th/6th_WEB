import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieDetail from "./MovieDetail";

import * as M from "./Movie.style";
import NoImg from "../../assets/noImg.webp";

const Movie = ({ movie }) => {
  const nav = useNavigate();
  const { title, poster_path, vote_average, original_title } = movie;
  const [isHover, setIsHover] = useState(false);

  const PosterURL = import.meta.env.VITE_POSTER_URL + `${poster_path}`;

  const handleDetail = () => {
    nav(`/movie/${original_title}`, { state: { ...movie } });
  };

  return (
    <M.Container onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={handleDetail}>
      <M.Wrapper>
        <img src={poster_path ? PosterURL : NoImg} alt={title} />
        <M.Box>
          <p>{title}</p>
          <p>{vote_average.toFixed(1)}</p>
        </M.Box>
      </M.Wrapper>
      <MovieDetail isHover={isHover} movie={movie} />
    </M.Container>
  );
};

export default Movie;
