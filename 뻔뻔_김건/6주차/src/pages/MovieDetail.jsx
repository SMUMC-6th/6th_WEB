import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  DetailContainer,
  DetailImg,
  DetailContext,
  DetailCast,
  DetailCredit,
} from "../components/Movies.style";
import Cast from "../components/Cast";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [casts, setCasts] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // detail 가져오기
        const movieResult = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          }
        );

        if (!movieResult.ok) {
          throw new Error("Network response was not ok");
        }

        const movieData = await movieResult.json();
        setMovie(movieData);

        // credit 가져오기
        const creditsResult = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          }
        );

        if (!creditsResult.ok) {
          throw new Error("Network response was not ok");
        }

        const creditsData = await creditsResult.json();

        const castDatum = creditsData.cast;
        const crewDatum = creditsData.crew;

        setCasts(castDatum);
        setCrew(crewDatum);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [movieId]);

  function star_average(vote_average) {
    const average = Math.round(vote_average);
    const stars = "⭐️".repeat(average);

    return stars;
  }

  return (
    <><DetailContainer>
      {movie && (
        <DetailContainer movieId={movie.id}>
          <DetailImg
            src={`${IMG_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <DetailContext>
            <h1>{movie.title}</h1>
            <br></br>
            <h2>평점: {star_average(movie.vote_average)}</h2>
            <br></br>
            <h3>개봉일자: {movie.release_date}</h3>
            <br></br>
            <h4>
              <p>줄거리</p>
              <br></br>
              {movie.overview
                ? movie.overview
                : "TMDB에서 제공해주는 상세 줄거리 정보가 없습니다."}
            </h4>
          </DetailContext>
        </DetailContainer>
      )}
    </DetailContainer>
    <DetailCredit><h5>출연진 및 제작진</h5></DetailCredit>
    <DetailCast>
    {casts.map((cast) => (
      <Cast
        key={cast.id}
        name={cast.name}
        profile_path={cast.profile_path}
        department={cast.character}
      />
    ))}
    {crew.map((crew) => (
      <Cast
        key={crew.id}
        name={crew.name}
        profile_path={crew.profile_path}
        department={crew.department}
      />
    ))}
  </DetailCast></>
  );
}