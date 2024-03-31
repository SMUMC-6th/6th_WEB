import React from "react";
import { movies } from './api';
import Movie from './components/Movie';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function App() {
  return (
    <div>
      <div className="app-container">
        {movies.results.map((item) => (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview} 
          />
        ))}
      </div>
    </div>
  );
}