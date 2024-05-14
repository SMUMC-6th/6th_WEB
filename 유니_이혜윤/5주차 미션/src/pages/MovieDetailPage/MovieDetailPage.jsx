import { useParams } from 'react-router-dom';
import * as MD from './MovieDetailPage.style.js';
import { FaStar } from "react-icons/fa";
import useFetchMovie from '../../hook/useFetchMovie.jsx';
import Loading from '../../components/Loading/Loading.jsx';

function MovieDetail() {
  const {id} = useParams();

  const {movieData} = useFetchMovie(id);

  if(!movieData) {
    return <Loading />
  }
  const{backdrop_path, poster_path, title, vote_average, overview, release_date} = movieData;

  // const location = useLocation();
  // const movie = location.state.movie; // MovieList에서 전달한 영화 데이터에 접근
  

  const renderStars = (rating) => {
    const roundedRating = Math.floor(rating); // 평점을 반올림하여 정수로 만듦
    const stars = [];

    // 반올림한 평점 수만큼 별 아이콘을 생성하여 배열에 추가
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<FaStar key={i} />);
    }

    return stars;
  };

  return (
    <MD.Container>
      <MD.BackgroundImage src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
      <MD.ImageContainer>
        <MD.MainImage src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
      </MD.ImageContainer>
      <MD.DetailContainer>
        <h1>{title}</h1>
        <h4>평점 {renderStars(vote_average)}</h4>
        <h4>개봉일 {release_date}</h4>
        <h4>줄거리</h4>
        <p>{overview ? overview : "상세 줄거리 정보가 없습니다.😓"}</p>
      </MD.DetailContainer>
    </MD.Container>
  );
}

export default MovieDetail;