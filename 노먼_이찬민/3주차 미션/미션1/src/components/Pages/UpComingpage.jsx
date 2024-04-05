import { useEffect, useState } from 'react';
import * as S from './Pages.styled';
import MovieItem from '../MovieItem';


const UpComingPage = (props) => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    // API 요청 시 옵션 설정
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjMxYmRhYTA5MzdiMzdmNjBkYTRkNzhiOTU4N2Q5NiIsInN1YiI6IjY2MGRmMDYyMzU4MThmMDEzMDM4Yjk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7L5PQZ0zxQkuzNUHBR0Wwv03gHQyot-fzTNQqp21Fsk'
      }
    };

    // API 요청 - async await를 사용해서 오류 방지
    async function getMovies() {
      try {
        const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const data = await movies.json(); // JSON 응답 파일을 자바스크립트 객체로 변환하기
        // console.log(data);
        setMovieItems(data.results);
        // console.log(movieItems);
      } catch (error) {
        console.error(error);
      }
    }

    getMovies();
  },[])

  // useEffect(() => {
  //   console.log(movieItems);
  //   console.log(movieItems[3].id, movieItems[3].title, movieItems[3].vote_average);
  // }, [movieItems]);


  // movie 매개변수로 movieItems를 받아옴과 동시에 순회하며 새로운 배열 생성하기, key는 영화의 id로 설정한다
  return (
    <S.Container>
      {movieItems.map((movie) => (
        <MovieItem 
        key={movie.id} 
        poster={movie.poster_path} 
        title={movie.title} 
        voteAverage={movie.vote_average}
        />
      ))}
    </S.Container>
  )
}

export default UpComingPage