import React from "react";
import { useState } from "react";
import "./App.css";
import { movies } from './components/movies.jsx';
import MovieItem from "./components/movieItem.jsx";

// state는 컴포넌트의 내부 값 변경에 사용.
// 구조분해 할당형식으로 movies 데이터 받아들이기 

function App() {
  // 영화 목록을 8개씩 분할하여 배열의 배열로 저장
  const moviesInRows = [];
  const chunkSize = 8;
  for (let i = 0; i < movies.results.length; i += chunkSize) {
    moviesInRows.push(movies.results.slice(i, i + chunkSize));
  }

  return (
    <div className="container">
      {moviesInRows.map((moviesInRow, rowIndex) => (
        // moviesInRows는 8개 아이템을 가진 배열"들"이고 row index를 key값으로 전달하면서 내부 배열의 수만큼 map으로 div를 만들어줌.
        <div key={rowIndex} className="row">
          {/* 내부 배열 하나(div)마다 속의 영화 아이템 정보들이 있음 */}
          {moviesInRow.map((movie, index) => (
            <MovieItem 
              key={index} 
              poster={movie.poster_path} 
              title={movie.title} 
              voteAverage={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </div>

      ))}
    </div>
  );
}

export default App;
