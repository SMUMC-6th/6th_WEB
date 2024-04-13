import Movie from "../../components/Movie";
import { getMoviesData } from "../../hooks/getMoviesData";
import * as S from "./UpComing.style";
import { RingLoader } from "react-spinners";

const UpComingPage = () => {
  const { movies, loading } = getMoviesData("upcoming");

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
        return (
          <Movie
            key={idx}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </div>
  );
};

export default UpComingPage;
