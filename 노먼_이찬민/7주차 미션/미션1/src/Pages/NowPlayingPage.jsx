import { useEffect, useState, useRef } from "react";
import * as S from "./Pages.styled";
import MovieItem from "../components/MovieItem/MovieItem";
import { Link } from "react-router-dom";
import { getMovies } from "../Hooks/getMovies";

const NowPlayingPage = () => {
  const containerScrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMovieItems, setTotalMovieItems] = useState([]);
  const { movieItems, isLoading } = getMovies(
    "now_playing",
    "ko-KR",
    currentPage
  );

  useEffect(() => {
    // 스크롤을 그냥 window로 추적하면 인식을 못함. 내 페이지 기준 내부 바디만 스크롤 되서 그 page conatainer에 ref달아서 사용
    const scrollElement = containerScrollRef.current;

    // 스크롤 핸들러 함수 설정 - ref 객체에 scroll 이벤트로 붙여서 스크롤 위치 추적하기
    const handleScroll = () => {
      // console.log(1);
      const scrollTop = scrollElement.scrollTop; // 스크롤을 얼마나 내렸는 지 누적값
      const clientHeight = scrollElement.clientHeight; // 컨테이너 요소의 화면 상 높이값
      const scrollHeight = scrollElement.scrollHeight; // 컨테이너 요소의 실제 내부 요소들 높이의 최종합
      console.log(scrollTop + " " + scrollHeight + " " + clientHeight);

      // 스크롤바 이동 값 + 요소 높이 >= 스크롤 끝까지 총 거리 - 이 조건에 해당하면 끝지점에 있는거임
      if (clientHeight + scrollTop >= scrollHeight - 20) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    // 이 함수 ref에 달아주기
    scrollElement.addEventListener("scroll", handleScroll);

    // 클린업 해주기
    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, []);

  // 위 유즈이펙트에서 생긴 스크롤 체크 함수에서 끝지점에 도달한 경우 page변경되고 다시 페치해오면 이 유즈이펙트 실행
  // 이걸로 바뀐 페이지값에 대한 API요청 반환값 movieItems를 기존 배열에 이어붙이기
  useEffect(() => {
    // setTotalMovieItems((prev) => [...prev, movieItems]);
    setTotalMovieItems((prev) => prev.concat(movieItems));
    console.log(totalMovieItems);
    // console.log(movieItems);
  }, [, movieItems]);

  return (
    <S.Container ref={containerScrollRef}>
      {isLoading && <S.Spinner></S.Spinner>}
      {totalMovieItems.map((movie) => (
        // movieItems 배열에는 key, poster, title, voteAverage속성이 있음.
        <MovieItem
          key={movie.id}
          id={movie.id}
          overview={movie.overview}
          poster={movie.poster_path}
          title={movie.title}
          voteAverage={movie.vote_average}
          originalTitle={movie.original_title}
        />
      ))}
    </S.Container>
  );
};

export default NowPlayingPage;
