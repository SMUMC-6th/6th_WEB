import React from "react";
import * as S from './MovieItem.style'

// 각 page mount마다 실행되면서 prop를 통해 정보를 받아옴
function MovieItem(props){
  const imageUrl = props.poster ? `https://image.tmdb.org/t/p/w500/${props.poster}` : '';

  // 평점은 2자리수까지만 표시하기, 너무많으니까 눈아픔
  return(
    <S.Item>
      <S.Image src={imageUrl}></S.Image>
      <S.TitleVote>
        <S.Span>{props.title}</S.Span>
        <S.Paragraph>⭐{props.voteAverage.toFixed(2)}</S.Paragraph> 
      </S.TitleVote>
    </S.Item>
  );
}

export default MovieItem;