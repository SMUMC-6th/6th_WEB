import { RingLoader } from "react-spinners";
import Movie from "../../components/Movie";
import * as S from "./PopularPage.style";

import { getMoviesData } from "../../hooks/getMoviesData";

const PopularPage = () => {
  const { movies, loading } = getMoviesData("popular");

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

export default PopularPage;
