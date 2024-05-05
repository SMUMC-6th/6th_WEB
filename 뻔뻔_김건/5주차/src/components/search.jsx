import React from "react";
import { useState, useEffect } from "react";
import HomeMovie from "./HomeMovie";
import {
  FindContainer,
  StyledInput,
  MovieBox,
  StyledLabel,
  FindDiv,
} from "./Movies.style";

export default function Search() {
  const [find, setFind] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    let MovieBox = document.getElementById("MovieBox");
    if (search.trim() === "") {
      MovieBox.style.display = "none";
    } else {
      MovieBox.style.display = "grid";
    }
  });

  const searchValue = (event) => {
    setsearch(event.target.value);
    console.log(search);
  };

  useEffect(() => {
    const fetchData = async () => {
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
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <FindDiv>
      <FindContainer>
        <StyledLabel> 📽 Find your movies 📽</StyledLabel>
        <StyledInput type="text" onChange={searchValue} />
        <MovieBox id="MovieBox">
          {find.map((item) => {
            return (
              <HomeMovie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            );
          })}
        </MovieBox>
      </FindContainer>
    </FindDiv>
  );
}