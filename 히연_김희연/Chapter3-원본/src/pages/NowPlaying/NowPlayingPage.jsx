import { useNavigate } from "react-router-dom";
import Movie from "../../components/Movie";
import { getMoviesData } from "../../hooks/getMoviesData";
import useGetInfinityPosts from "../../hooks/queries/useGetInfinityPosts";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const NowPlayingPage = () => {
  const { movies, loading, error } = getMoviesData("now_playing");
  const {
    data,
    // 첫번쨰 데이터 호출할 떄
    // 캐시된 데이터 없이, 처음 실행 한 쿼리일떄
    isLoading,
    // 한번 호출하고, 다시 호출할 떄
    // tanstack-query내부에, 비동기 함수가 처리 되었는지 여부.
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetInfinityPosts("now_playing");

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        <h1>에러가 발생했습니다.</h1>
        <button onClick={() => navigate("/")}>홈 페이지로 이동</button>
      </div>
    );
  }

  if (loading) {
    // 로딩 스피너 구현
    return <div>Loading 중입니다...</div>;
  }

  return (
    <div className="app-container">
      {data?.map((page) =>
        page?.results.map((item, idx) => {
          return (
            <Movie
              key={idx}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })
      )}

      <div
        ref={ref}
        style={{
          marginTop: "100px",
          backgroundColor: "pink",
          width: "100%",
          height: "100px",
        }}
      ></div>
    </div>
  );
};

export default NowPlayingPage;
