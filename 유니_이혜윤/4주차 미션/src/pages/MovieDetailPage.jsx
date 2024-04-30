import { useLocation } from 'react-router-dom';
import * as MD from './MovieDetailPage.style.js';
import { FaStar } from "react-icons/fa";

function MovieDetail() {
  const location = useLocation();
  const movie = location.state.movie; // MovieList에서 전달한 영화 데이터에 접근

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
    <MD.Container backgroundImage={movie.poster_path}>
      <MD.ImageContainer>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
      </MD.ImageContainer>
      <MD.DetailContainer>
        <h1>{movie.title}</h1>
        <h4>평점 {renderStars(movie.vote_average)}</h4> {/* 평점 별로 해야되는데ㅔ에ㅜㅠ */}
        <h4>개봉일 {movie.release_date}</h4>
        <h4>줄거리</h4>
        <p>{movie.overview ? movie.overview : "상세 줄거리 정보가 없습니다.😓"}</p>
      </MD.DetailContainer>
    </MD.Container>
  );
}

export default MovieDetail;