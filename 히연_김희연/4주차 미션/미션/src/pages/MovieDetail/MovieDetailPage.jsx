import { useLocation } from "react-router-dom";
import * as S from "./MovieDetailPage.style";
import axios from "axios";

const MovieDetailPage = () => {
  const location = useLocation();

  const { title, overview, release_date, vote_average, poster_path } =
    location.state;

  return (
    <S.container>
      <S.MovieInfoContainer>
        <S.MovieBackground
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <S.DetailContainer>
          <S.image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <S.content>
            <S.title>{title}</S.title>
            <S.paragraph>평점: {"⭐️".repeat(vote_average)}</S.paragraph>

            <S.paragraph>개봉일: {release_date}</S.paragraph>

            {overview ? (
              <S.overview>
                줄거리
                <br />
                <br />
                {overview}
              </S.overview>
            ) : (
              <S.overview>줄거리가 없습니다.</S.overview>
            )}
          </S.content>
        </S.DetailContainer>
      </S.MovieInfoContainer>
    </S.container>
  );
};

export default MovieDetailPage;
