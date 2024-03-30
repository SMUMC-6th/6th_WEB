import { useState } from "react";
import MovieDetail from "./MovieDetail";
import PropTypes from "prop-types";

import * as M from "./Movie.style";

const Movie = ({ movie }) => {
  const { title, poster_path, vote_average } = movie;
  const [isHover, setIsHover] = useState(false);

  return (
    <M.Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <M.Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
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

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
