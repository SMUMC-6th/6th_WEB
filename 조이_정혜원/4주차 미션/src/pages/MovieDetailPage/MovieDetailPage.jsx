import { useLocation } from "react-router-dom";
import NoImg from "../../assets/noImg.png";
import * as S from "./MovieDetailPage.style";

const MovieDetailPage = () => {
  const location = useLocation();

  const { backdrop_path, poster_path, title, vote_average, overview, release_date } = location.state;

  const PosterURL = import.meta.env.VITE_POSTER_URL + `${poster_path}`;
  const backgroudImg = import.meta.env.VITE_POSTER_URL + `${backdrop_path}`;

  return (
    <S.Conatiner $backgroudImg={backgroudImg}>
      <img src={poster_path ? PosterURL : NoImg} alt={title} />
      <S.Content>
        <h3>{title}</h3>
        <h4>평점 : {"⭐️".repeat(Math.floor(vote_average))}</h4>
        <h4>개봉일 : {release_date}</h4>
        <h4>줄거리</h4>
        <p>{overview ? overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</p>
      </S.Content>
    </S.Conatiner>
  );
};

export default MovieDetailPage;
