import React, { useState, useEffect } from 'react';
import * as MP from "./MoviePage.style"
import { FaStar } from "react-icons/fa";

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]); // 영화 데이터를 저장할 상태

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDA5MjIwMTNmYzI5OTIwYzIxZDZjYzUyZDIwZjdhYSIsInN1YiI6IjY2MGJjMDFkMTVkZWEwMDE3YzM0N2U1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GhdBlmRBMUn-TkuYUT6yueeQlz0huP8NadqwKUeBaE8'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1', options)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
  }, []);

  return (
    <MP.Container>
      <MP.Movielist>
        {movies.map(movie => (
          <MP.Content key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            <MP.Info>
              <h3>{movie.title}</h3>
              <div><span><FaStar /></span>{movie.vote_average}</div>
            </MP.Info>
          </MP.Content>
        ))}
      </MP.Movielist>
    </MP.Container>
  )
}

export default TopRatedPage;
