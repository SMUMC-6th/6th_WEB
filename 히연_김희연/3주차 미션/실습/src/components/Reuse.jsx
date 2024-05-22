import styled from "styled-components";
import Movie from "../../../../4주차 미션/실습/src/components/Movie/Movie";
import { getMoviesData } from "../hooks/getMovieData";

const ReusePage = ({ page }) => {
  const { movies, loading } = getMoviesData(page);

  if (loading) {
    return (
      <Loading>
        <RingLoader color="#36d7b7" size="80px" />
      </Loading>
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
export default ReusePage;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
