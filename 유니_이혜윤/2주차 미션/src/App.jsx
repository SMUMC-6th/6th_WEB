import React from 'react';
import { useState } from 'react'
import './App.css';
import { MovieList } from './MovieList.jsx';
import { movies } from './api.js';

function App() {

  return (
    <div className="page">
      <div className="container">
        {movies.results.map(movie => (
          <MovieList movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
