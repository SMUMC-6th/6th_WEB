import { useEffect } from "react";
import * as M from "../Movies.style";
import ErrorComponent from "../../Error/ErrorComponent";
import Movie from "../Movie";
import Loading from "../../Loading/Loading";
import { LoadingWrapper } from "./MoviesScroll.sytyle";
import Skeleton from "../../Skeleton/Skeleton";
import useGetInfinityMovies from "../../../hooks/queries/useGetInfinityMovies";
import { useInView } from "react-intersection-observer";
import useThrottling from "../../../hooks/useThrottling";

const MoviesScroll = ({ requestURL }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  const { data, fetchNextPage, hasNextPage, isPending, isFetching, isError } = useGetInfinityMovies(requestURL);

  const throttlingNewPage = useThrottling(fetchNextPage, 1 * 1000);

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && throttlingNewPage();
    }
  }, [inView, isFetching, hasNextPage]);

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
      {isFetching ? (
        <>
          <M.MovieContainer>
            {new Array(10).fill("").map((_, idx) => (
              <Skeleton key={idx} />
            ))}
          </M.MovieContainer>
          <Loading />
        </>
      ) : (
        <>
          <M.MovieContainer>
            {data?.map((page) => page.results.map((movie, idx) => <Movie key={idx} movie={movie} />))}
          </M.MovieContainer>
          <LoadingWrapper ref={ref}>
            <Loading />
          </LoadingWrapper>
        </>
      )}
    </M.Container>
  );
};

export default MoviesScroll;
