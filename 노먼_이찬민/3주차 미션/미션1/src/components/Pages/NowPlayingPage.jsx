import { useEffect, useState } from 'react';
import * as S from './Pages.styled';
import MovieItem from '../MovieItem';

const NowPlayingPage = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 초기값을 true로 설정

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjMxYmRhYTA5MzdiMzdmNjBkYTRkNzhiOTU4N2Q5NiIsInN1YiI6IjY2MGRmMDYyMzU4MThmMDEzMDM4Yjk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7L5PQZ0zxQkuzNUHBR0Wwv03gHQyot-fzTNQqp21Fsk'
      }
    };

    async function getMovies() {
      setIsLoading(true); // 로딩 시작
      try {
        const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const data = await movies.json();
        const movieList = data.results.map(item => ({
          key: item.id,
          poster: item.poster_path,
          title: item.title,
          voteAverage: item.vote_average
        }));
        setMovieItems(movieList);
        setIsLoading(false); // 로딩 종료
        
      } catch (error) {
        console.error(error);
      } 
    }

    getMovies();
  }, []);

  return (
    // 로딩 스피너를 구현하긴 했는데, 너무 빨라서 안보임 ㅋㅋㅋㅋㅋㅋ
    <S.Container>
      {(isLoading) && (<S.Spinner></S.Spinner>)}
      {movieItems.map(movie => (
        // movie 매개변수로 movieItems를 받아옴과 동시에 순회하며 새로운 배열 생성하기, key는 영화의 id로 설정한다
        <MovieItem key={movie.key} 
        poster={movie.poster} 
        title={movie.title} 
        voteAverage={movie.voteAverage} />
      ))}
    </S.Container>
    
    
  );
};

export default NowPlayingPage;