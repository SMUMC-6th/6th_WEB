import Movie from "./Movie";
import useFetchMovie from "../../hooks/useFetchMovie";
import ErrorComponent from "../Error/ErrorComponent";
import Loading from "../Loading/Loading";
import * as M from "./Movies.style";
import { useState } from "react";

const Movies = ({ requestURL }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { movies, loading, error, totalPage } = useFetchMovie(requestURL, currentPage);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <M.Container>
      <M.MovieContainer>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </M.MovieContainer>
      <M.ButtonBox>
        <M.Button onClick={() => setCurrentPage((currentPage) => currentPage - 1)} disabled={currentPage === 1}>
          <M.IconBack disabled={currentPage === 1} />
        </M.Button>
        <p>{currentPage}</p>
        <M.Button onClick={() => setCurrentPage((currentPage) => currentPage + 1)} disabled={currentPage === totalPage}>
          <M.IconForward disabled={currentPage === totalPage} />
        </M.Button>
      </M.ButtonBox>
    </M.Container>
  );
};

export default Movies;
