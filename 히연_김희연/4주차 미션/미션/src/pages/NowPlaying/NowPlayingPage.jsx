import { useNavigate } from "react-router-dom";
import Movie from "../../components/Movie";
import { getMoviesData } from "../../hooks/getMoviesData";
import * as S from "./NowPlaying.style";
import { RingLoader } from "react-spinners";

const NowPlayingPage = () => {
  const { movies, loading, error } = getMoviesData("now_playing");
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
    return (
      <S.Loading>
        <RingLoader color="#36d7b7" size="80px" />
      </S.Loading>
    );
  }

  return (
    <div className="app-container">
      {movies.map((item, idx) => {
        return <Movie key={idx} movie={item} />;
      })}
    </div>
  );
};

export default NowPlayingPage;
