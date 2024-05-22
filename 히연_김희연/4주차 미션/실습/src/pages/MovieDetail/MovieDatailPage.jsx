import { useLocation, useParams } from "react-router-dom";
import * as S from "./MovieDetailPage.style";
import { getDetailData } from "../../hooks/getDetailData";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { movies, loading, error } = getDetailData(id);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const PosterURL = movies.poster_path
    ? import.meta.env.VITE_POSTER_URL + movies.poster_path
    : "";

  return (
    <S.container>
      <S.MovieInfoContainer>
        <S.image
          src={movies.poster_path ? PosterURL : "NoImg"}
          alt={movies.title}
        />
        <S.DetailContainer>
          <S.title>{movies.title}</S.title>
          <S.paragraph>
            평점: {"⭐️".repeat(Math.floor(movies.vote_average))}
          </S.paragraph>
          <S.paragraph>개봉일: {movies.release_date}</S.paragraph>
          <S.overview>줄거리: {movies.overview}</S.overview>
        </S.DetailContainer>
      </S.MovieInfoContainer>
    </S.container>
  );
};

export default MovieDetailPage;
