import React, { useState, useEffect } from "react";
import HomeMovie from "./SearchMovie";
import { FindContainer, Input, MovieBox, Label, FindDiv } from "../style/Search.style";

export default function Search() {
  const [find, setFind] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const searchValue = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search.trim() === "") {
      setFind([]);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=ko&page=1`,
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
        setFind(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return (
    <FindDiv>
      <FindContainer>
        <Label> 📽 Find your movies !</Label>
        <Input type="text" onChange={searchValue} value={search} />
        {search.trim() !== "" && (
          <MovieBox>
            {loading ? (
              <h3>데이터를 받아오는 중입니다.</h3>
            ) : (
              find.map((item) => (
                <HomeMovie
                  key={item.id}
                  movieId={item.id}
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
              ))
            )}
          </MovieBox>
        )}
      </FindContainer>
    </FindDiv>
  );
}
