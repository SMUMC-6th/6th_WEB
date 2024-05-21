import Movie from "./Movie";
import ErrorComponent from "../Error/ErrorComponent";
import Loading from "../Loading/Loading";
import * as M from "./Movies.style";
import { useState } from "react";
import useGetMovies from "../../hooks/queries/useGetMovies";
import queryClient from "../../api/queryClient";

const Movies = ({ requestURL }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isPending, isError, data } = useGetMovies(requestURL, currentPage);

  // useEffect(() => {
  //   const nextPage = currentPage + 1;
  //   queryClient.prefetchQuery({
  //     queryKey: ["movies", requestURL, nextPage],
  //     queryFn: () => useGetMovies(requestURL, nextPage),
  //   });
  // }, [queryClient, currentPage]);

  // queryClient.invalidateQueries(["movies"]);

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
        {data?.results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </M.MovieContainer>
      <M.ButtonBox>
        <M.Button onClick={() => setCurrentPage((currentPage) => currentPage - 1)} disabled={currentPage === 1}>
          <M.IconBack disabled={currentPage === 1} />
        </M.Button>
        <p>{currentPage}</p>
        <M.Button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === data?.total_pages}>
          <M.IconForward disabled={currentPage === data?.total_pages} />
        </M.Button>
      </M.ButtonBox>
    </M.Container>
  );
};

export default Movies;
