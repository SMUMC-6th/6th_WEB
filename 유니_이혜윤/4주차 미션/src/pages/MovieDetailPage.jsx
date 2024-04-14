import { useLocation } from 'react-router-dom';
import * as MD from './MovieDetailPage.style.js';
import { FaStar } from "react-icons/fa";

function MovieDetail() {
  const location = useLocation();
  const movie = location.state.movie; // MovieList에서 전달한 영화 데이터에 접근

  return (
    // 배경포스터 사진만 어둡게 처리 어떻게하지ㅣ이ㅣ
    <MD.Container backgroundImage={movie.poster_path}>
      <MD.ImageContainer>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
      </MD.ImageContainer>
      <MD.DetailContainer>
        <h1>{movie.title}</h1>
        <h4>평점 <FaStar rating={movie.vote_average} /></h4> {/* 평점 별로 해야되는데ㅔ에ㅜㅠ */}
        <h4>개봉일 {movie.release_date}</h4>
        <h4>줄거리</h4>
        <p>{movie.overview ? movie.overview : "상세 줄거리 정보가 없습니다.😓"}</p>
      </MD.DetailContainer>
    </MD.Container>
  );
}

export default MovieDetail;