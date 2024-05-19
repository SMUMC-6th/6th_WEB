import { useLocation } from "react-router-dom";
import * as S from "./MovieDetailPage.style";
const MovieDetailPage = () => {
  const location = useLocation();

  const {
    backdrop_path,
    poster_path,
    title,
    vote_average,
    overview,
    release_date,
  } = location.state;

  const PosterURL = import.meta.env.VITE_POSTER_URL + `${poster_path}`;
  const backgroundImg = import.meta.env.VITE_POSTER_URL + `${backdrop_path}`;

  return (
    <S.container style={{ backgroundImage: `url(${backgroundImg})` }}>
      <S.MovieInfoContainer>
        <S.image src={poster_path ? PosterURL : NoImg} alt={title} />
        <S.DetailContainer>
          <S.title>{title}</S.title>
          <S.paragraph>
            평점: {"⭐️".repeat(Math.floor(vote_average))}
          </S.paragraph>
          <S.paragraph>개봉일: {release_date}</S.paragraph>
          <S.overview>줄거리: {overview}</S.overview>
        </S.DetailContainer>
      </S.MovieInfoContainer>
    </S.container>
  );
};

export default MovieDetailPage;
