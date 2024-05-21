import { useEffect, useRef } from "react";
import * as M from "../Movies.style";
import ErrorComponent from "../../Error/ErrorComponent";
import Movie from "../Movie";
import Loading from "../../Loading/Loading";
import { LoadingWrapper } from "./MoviesScroll.sytyle";
import Skeleton from "../../Skeleton/Skeleton";
import useGetInfinityMovies from "../../../hooks/queries/useGetInfinityMovies";

const MoviesScroll = ({ requestURL }) => {
  const pageEnd = useRef();

  const { data, fetchNextPage, hasNextPage, isPending, isFetching, isError, isFetchingNextPage } =
    useGetInfinityMovies(requestURL);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isFetching && entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.8 },
    );

    if (pageEnd.current) {
      observer.observe(pageEnd.current);
    }

    return () => {
      if (pageEnd.current) {
        observer.unobserve(pageEnd.current);
      }
    };
  }, [isFetching]);

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
      {isFetchingNextPage ? (
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
          <LoadingWrapper ref={pageEnd}>
            <Loading />
          </LoadingWrapper>
        </>
      )}
    </M.Container>
  );
};

export default MoviesScroll;
