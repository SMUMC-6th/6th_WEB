import * as S from "./NewsDetail.style";

const NewsDetail = ({ isHover, news }) => {
  const { detailImage } = news;

  return (
    <S.Container $isHover={isHover}>
      <img src={detailImage} />
    </S.Container>
  );
};

export default NewsDetail;
