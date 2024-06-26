import { useParams } from "react-router-dom";
import NoImg from "../../assets/noImg.webp";
import * as S from "./MovieDetailPage.style";
import Credits from "../../components/Movies/Credits/Credits";
import useFetctDetail from "../../hooks/useFetchDetail";

const MovieDetailPage = () => {
  // const location = useLocation();
  // const { backdrop_path, poster_path, title, vote_average, overview, release_date } = location.state;

  const { id } = useParams();

  const { movieData } = useFetctDetail(id);
  const { backdrop_path, poster_path, title, vote_average, overview, release_date } = movieData;

  const PosterURL = import.meta.env.VITE_POSTER_URL + `${poster_path}`;
  const backgroudImg = import.meta.env.VITE_POSTER_URL + `${backdrop_path}`;

  return (
    <>
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
      <S.CreditConatiner>
        <h2>출연진 및 제작진</h2>
        <Credits id={id} />
      </S.CreditConatiner>
    </>
  );
};

export default MovieDetailPage;
