import { useEffect, useRef, useState } from "react";
import useFetchMovie from "../../../hooks/useFetchMovie";
import * as M from "../Movies.style";
import ErrorComponent from "../../Error/ErrorComponent";
import Movie from "../Movie";
import Skeleton from "../../Loading/Skeleton/Skeleton";
import Loading from "../../Loading/Loading";
import { LoadingWrapper } from "./MoviesScroll.sytyle";

const MoviesScroll = ({ requestURL }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageEnd = useRef();

  const loadPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const { allMovie, loading, error } = useFetchMovie(requestURL, currentPage);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadPage();
        }
      },
      { threshold: 0.8 },
    );

    if (!loading) {
      // 로딩중이 아님 -> 데이터 받아옴
      observer.observe(pageEnd.current);
    } else {
      // 데이터 받아오는 중 일때는 비활성화
      observer.disconnect(pageEnd.current);
    }
  }, [loading]);

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <M.Container>
      <M.MovieContainer>
        {allMovie.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </M.MovieContainer>
      {loading ? (
        <Skeleton />
      ) : (
        <LoadingWrapper ref={pageEnd}>
          <Loading />
        </LoadingWrapper>
      )}
    </M.Container>
  );
};

export default MoviesScroll;
