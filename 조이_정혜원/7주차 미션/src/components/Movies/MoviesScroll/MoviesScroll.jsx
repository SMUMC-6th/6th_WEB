import { useEffect, useRef } from "react";
import * as M from "../Movies.style";
import ErrorComponent from "../../Error/ErrorComponent";
import Movie from "../Movie";
import Loading from "../../Loading/Loading";
import { LoadingWrapper } from "./MoviesScroll.sytyle";
import { movieAxios } from "../../../api/axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import Skeleton from "../../Skeleton/Skeleton";

const MoviesScroll = ({ requestURL }) => {
  const pageEnd = useRef();

  const fetchMovie = async ({ pageParam }) => {
    const res = await movieAxios(requestURL, {
      params: {
        page: pageParam,
      },
    });

    return res.data.results;
  };

  const { data, fetchNextPage, hasNextPage, isPending, isFetching, isError } = useInfiniteQuery({
    queryKey: ["allMovie"],
    queryFn: fetchMovie,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage) return pages.length + 1;
    },
  });

  const movies = data ? [].concat(...data.pages) : [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
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
            {movies.map((movie, idx) => (
              <Movie key={idx} movie={movie} />
            ))}
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
