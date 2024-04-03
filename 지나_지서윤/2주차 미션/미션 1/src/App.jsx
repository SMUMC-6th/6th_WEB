import React from 'react';
import { movies } from "./api"; 
import './App.css';


function App() {
  console.log(movies.results);
  return (
    <div className="Page">
      <div className="Wrapper">
        {movies.results.map((movies) => (
          <div className ="Movielist"> 
            <div className="poster">
            <img className="poster-image" src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}  alt="Movie Poster"/>
            <div className="movie-container">
              <div className="movie-title">{movies.original_title}</div>
              <div className="movie-info">{movies.vote_average}</div>
            </div>
            </div>
            <div className="movie-hiddenContent">
              <div className="movie-title">{movies.original_title}</div>
              <div className="movie-info">{movies.overview}</div>   
            </div>
          </div>
         
        ))}
      </div>
    </div>
  );
}

export default App;