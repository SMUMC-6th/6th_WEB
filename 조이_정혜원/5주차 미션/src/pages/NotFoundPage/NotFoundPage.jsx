import { Link } from "react-router-dom";
import * as S from "./NotFoundPage.style";

const NotFoundPage = () => {
  return (
    <S.Container>
      <S.Icon />
      <h1>Oops!</h1>
      <h4>예상치 못한 에러가 발생했습니다</h4>
      <p>Not Found</p>
      <Link to="/">메인으로 이동하기</Link>
    </S.Container>
  );
};

export default NotFoundPage;
