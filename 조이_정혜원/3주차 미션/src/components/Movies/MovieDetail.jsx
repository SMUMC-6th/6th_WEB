import * as MD from "./MovieDetail.style";

const MovieDetail = ({ isHover, movie }) => {
  const { title, overview } = movie;

  return (
    <MD.Container $isHover={isHover}>
      <MD.Wrapper>
        <p style={{ fontWeight: "bold" }}>{title}</p>
        <p>
          {overview.length > 160 ? overview.slice(0, 160) + "..." : overview}
        </p>
      </MD.Wrapper>
    </MD.Container>
  );
};

export default MovieDetail;
