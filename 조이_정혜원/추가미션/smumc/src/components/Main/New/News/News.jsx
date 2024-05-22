import { useState } from "react";
import * as S from "./News.style";
import NewsDetail from "../NewsDetail/NewsDetail";

const News = ({ news }) => {
  const [isHover, setIsHover] = useState(false);

  const { title, description, image, date } = news;

  return (
    <S.Container onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <img src={image} alt={title} />
      <S.TextWrapper>
        <h3>{title}</h3>
        <div> {description}</div>
        <p>{date}</p>
      </S.TextWrapper>
      <NewsDetail isHover={isHover} news={news} />
    </S.Container>
  );
};

export default News;
