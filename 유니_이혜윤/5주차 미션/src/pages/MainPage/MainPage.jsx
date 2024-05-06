import * as M from "./MainPage.style"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainPage = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${type}?language=ko&page=2`;

        const response = await axios.get(url, {  // axios.get 사용
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`, // 환경 변수에서 토큰 가져오기
          },
        });

        if (!response.data) {
          throw new Error('No data received');
        }

        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [type]);

  // 검색어가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredMovies(movies);
    }
    else {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchTerm, movies]);

  // 검색어를 업데이트
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <M.MainContainer>
      <M.MainTop><p>🎬환영합니다</p></M.MainTop>
      <M.MainBottom>
        Find your movies !<br />
        <M.Search>
          <input type="text" onChange={handleSearchChange} value={searchTerm}></input>
          <button >🔍</button>
        </M.Search>
      </M.MainBottom>
      
      {/* 영화 목록 표시 */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filteredMovies.map(movie => (
          <div key={movie.id}>
            {movie.title}
          </div>
        ))
      )}
    </M.MainContainer>
  )
}

export default MainPage;