import React, { useEffect } from "react";
import * as S from "./BoardPost.style";
import { useState } from "react";

function BoardPost(props) {
  const { id, title, writer, writeTime, views, isHeader, isHighlight } = props;

  const [width, setWidth] = useState(["10%", "10%", "10%", "15%", "10%"]);
  const [marginRight, setMarginRight] = useState([
    "25%",
    "10%",
    "5%",
    "3%",
    "2%",
  ]);
  const [borderPx, setBorderPx] = useState();

  useEffect(() => {
    if (isHeader) {
      setWidth(["10%", "10%", "10%", "15%", "10%"]);
      setMarginRight(["20%", "15%", "10%", "0%", "0%"]);
    } else {
      setWidth(["5%", "50%", "20%", "20%", "5%"]);
      setMarginRight([0, 0, 0, 0, 0]);
    }

    if (isHighlight) {
      setBorderPx("2px");
    } else {
      setBorderPx("1px");
    }
  }, [isHeader]);

  // if (isHeader) {
  //   () => setWidth(["10%", "10%", "10%", "15%", "10%"]);
  //   () => setMarginRight(["25%", "10%", "5%", "3%", "2%"]);
  // } else {
  //   () => setWidth(["5%", "50%", "20%", "20%", "5%"]);
  //   () => setMarginRight([0, 0, 0, 0, 0]);
  // }

  return (
    <S.BoardBoxPost key={id} borderPx={borderPx}>
      {console.log(width, marginRight)}
      <S.BoardBoxPostItem width={width[0]} marginRight={marginRight[0]}>
        {id}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[1]} marginRight={marginRight[1]}>
        {title}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[2]} marginRight={marginRight[2]}>
        {writer}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[3]} marginRight={marginRight[3]}>
        {writeTime}
      </S.BoardBoxPostItem>
      <S.BoardBoxPostItem width={width[4]} marginRight={marginRight[4]}>
        {views}
      </S.BoardBoxPostItem>
    </S.BoardBoxPost>
  );
}

export default BoardPost;
