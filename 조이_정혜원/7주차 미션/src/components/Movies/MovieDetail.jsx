import * as MD from "./MovieDetail.style";

const MovieDetail = ({ isHover, movie }) => {
  const { title, overview } = movie;

  return (
    <MD.Container $isHover={isHover}>
      <MD.Wrapper>
        <p style={{ fontWeight: "bold" }}>{title}</p>
        <p>
          {overview
            ? overview.length > 160
              ? overview.slice(0, 160) + "..."
              : overview
            : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}
        </p>
      </MD.Wrapper>
    </MD.Container>
  );
};

export default MovieDetail;
