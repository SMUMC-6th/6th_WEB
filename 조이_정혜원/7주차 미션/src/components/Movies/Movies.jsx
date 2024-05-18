import Movie from "./Movie";
import ErrorComponent from "../Error/ErrorComponent";
import Loading from "../Loading/Loading";
import * as M from "./Movies.style";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { movieAxios } from "../../api/axios";

const Movies = ({ requestURL }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const fetchMovie = async (requestURL, page) => {
    const res = await movieAxios(requestURL, {
      params: {
        page: page,
      },
    });
    setTotalPage(res.data.total_pages);
    return res.data.results;
  };

  const {
    isPending,
    isError,
    data: movies,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["movies", currentPage],
    queryFn: () => fetchMovie(requestURL, currentPage),
    placeholderData: keepPreviousData,
  });

  if (isPending) {
    return (
      <M.LoadingContainer>
        <Loading />
      </M.LoadingContainer>
    );
  }

  if (isError) {
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
        <M.Button
          onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          disabled={isPlaceholderData || totalPage === currentPage}
        >
          <M.IconForward disabled={isPlaceholderData || totalPage === currentPage} />
        </M.Button>
      </M.ButtonBox>
    </M.Container>
  );
};

export default Movies;
