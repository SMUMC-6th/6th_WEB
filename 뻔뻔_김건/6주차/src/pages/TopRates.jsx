import React from "react";
import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import { AppContainer } from "../components/Movies.style";
import Loading from "../components/Loading";

export default function TopRates() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          }
        );

        if (!result.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await result.json();

        setMovies(data.results);

        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <AppContainer>
          {movies.map((item) => {
            return (
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
                movieId={item.id}
              />
            );
          })}
        </AppContainer>
      )}
    </div>
  );
}