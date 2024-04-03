import { useState } from "react";
import MovieDetail from "./MovieDetail";

import * as M from "./Movie.style";
import NoImg from "../../assets/noImg.png";

const Movie = ({ movie }) => {
  const { title, poster_path, vote_average } = movie;
  const [isHover, setIsHover] = useState(false);

  const PosterURL = import.meta.env.VITE_POSTER_URL + `${poster_path}`;

  return (
    <M.Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <M.Wrapper>
        <img src={poster_path ? PosterURL : NoImg} alt={title} />
        <M.Box>
          <p>{title}</p>
          <p>{vote_average}</p>
        </M.Box>
      </M.Wrapper>
      <MovieDetail isHover={isHover} movie={movie} />
    </M.Container>
  );
};

export default Movie;
