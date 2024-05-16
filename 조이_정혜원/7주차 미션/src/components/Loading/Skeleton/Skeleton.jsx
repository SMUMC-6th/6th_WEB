import * as M from "../../Movies/Movies.style";
import * as MO from "../../Movies/Movie.style";
import * as S from "./Skeleton.style";

const Skeleton = () => {
  let box = new Array(5).fill(null);
  box = box.map((_, idx) => idx + 1);

  return (
    <S.Container>
      <M.MovieContainer>
        {box.map((e) => (
          <MO.Wrapper key={e}>
            <img />
            <MO.Box>
              <p></p>
              <p></p>
            </MO.Box>
          </MO.Wrapper>
        ))}
      </M.MovieContainer>
    </S.Container>
  );
};

export default Skeleton;
