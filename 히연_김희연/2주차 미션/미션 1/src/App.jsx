import React from "react";
import "./App.css";
import { movies } from "../public/data/movies";
import Movie from "./components/Movie";

const App = () => {
  return (
    <div>
      <div className="app-container">
        {movies.results.map((item, idx) => {
          return (
            <Movie
              key={idx}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
