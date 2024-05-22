import { Container, Wrapper } from "../Movies/Movie.style";
import * as S from "./Skeleton.style";

const Skeleton = () => {
  return (
    <Container>
      <Wrapper>
        <S.Img />
        <S.Box>
          <div></div>
          <p></p>
        </S.Box>
      </Wrapper>
    </Container>
  );
};

export default Skeleton;
