import React from "react";
import * as S from "./MovieItem.style";
import { Link } from "react-router-dom";
import { getMovieEngTitle } from "../Hooks/getMovieEngTitle";

// 각 page mount마다 실행되면서 prop를 통해 정보를 받아옴
function MovieItem(props) {
  const imageUrl = props.poster
    ? `https://image.tmdb.org/t/p/w500/${props.poster}`
    : "";
  const myData = {
    // id : props.id,
    poster: imageUrl,
    title: props.title,
    overview: props.overview,
    voteAverage: props.voteAverage,
  };
  // 영어제목 가져와서 URL 뒤에 붙임
  const movieEngTitle = getMovieEngTitle(props.id).movieEngTitle;
  const linkURL = `/movie/${movieEngTitle}`;

  // 평점은 2자리수까지만 표시하기, 너무많으니까 눈아픔
  // 포스터에 링크 달아보기! -> myData에 필요 정보를 담아놓고 Link props state로 전달하기
  return (
    <S.Item>
      <S.LLink to={linkURL} state={{ data: myData }}>
        <S.Image
          src={imageUrl}
          alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fkr%2Fsearch%2Fimages%3Fk%3Dno%2Bimage%2Bavailable&psig=AOvVaw0tf_ZhAi0gsfHn47T6q3JZ&ust=1712494173192000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIihn4nQrYUDFQAAAAAdAAAAABAE"
        ></S.Image>
      </S.LLink>
      <S.TitleVote>
        <S.Span>{props.title}</S.Span>
        <S.Paragraph>⭐{props.voteAverage.toFixed(2)}</S.Paragraph>
      </S.TitleVote>
    </S.Item>
  );
}

export default MovieItem;
