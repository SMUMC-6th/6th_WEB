import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import { AppContainer } from "../style/Page.style";
import Loading from "../components/Loading";
import smallLoading from "../components/smallLoading";

export default function NowPlaying() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [smallLoading, setSmallLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);

  const fetchData = async (page) => {
    setFetching(true);
    try {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${page}`,
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

      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setNextPage(data.page < 500);
      setFetching(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData(page).then(() => setLoading(false));
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - 50;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !isFetching) {
      setFetching(true);
      setSmallLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  };
  
  useEffect(() => {
    if (isFetching && hasNextPage) {
      fetchData(page).then(() => setSmallLoading(false));
    } else if (!hasNextPage) {
    }
    setFetching(false);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <AppContainer>
          {smallLoading ? (
            <smallLoading />
          ) : (
            movies.map((item) => (
              <Movie
                key={item.id}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
                movieId={item.id}
              />
            ))
          )}
        </AppContainer>
      )}
      </div>
  );
}