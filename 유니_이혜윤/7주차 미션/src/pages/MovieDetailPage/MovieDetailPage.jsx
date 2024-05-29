import { useParams } from 'react-router-dom';
import * as MD from './MovieDetailPage.style.js';
import { FaStar } from "react-icons/fa";
import useFetchMovie from '../../hook/useFetchMovie.jsx';
import Loading from '../../components/Loading/Loading.jsx';
import Credits from '../../components/Credits/Credits.jsx';

function MovieDetail() {
  const {id} = useParams();
  const { data, isLoading, error} = useFetchMovie(null, id);

  if(isLoading) {
    return <Loading />;
  }

  if(error) {
    return <div>{error.message}</div>;
  }

  const{backdrop_path, poster_path, title, vote_average, overview, release_date} = data;

  // const location = useLocation();
  // const movie = location.state.movie; // MovieList에서 전달한 영화 데이터에 접근

  return (
    <MD.Container>
      <MD.Info>
        <MD.BackgroundImage src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
        <MD.ImageContainer>
          <MD.MainImage src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
        </MD.ImageContainer>
        <MD.DetailContainer>
          <h1>{title}</h1>
          <h4>평점 {"🌟".repeat(Math.floor(vote_average))}</h4>
          <h4>개봉일 {release_date}</h4>
          <h4>줄거리</h4>
          <p>{overview ? overview : "상세 줄거리 정보가 없습니다.😓"}</p>
        </MD.DetailContainer>
      </MD.Info>
      <MD.Credit>
        <h2>출연진 및 제작진</h2>
        <Credits id={id} />
      </MD.Credit>
    </MD.Container>
  );
}

export default MovieDetail;