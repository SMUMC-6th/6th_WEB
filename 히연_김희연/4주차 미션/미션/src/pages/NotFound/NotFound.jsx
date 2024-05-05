import { useNavigate } from "react-router-dom";
import * as S from "./NotFound.style";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.Title>Oops!</S.Title>
      <S.Message>
        예상치 못한 에러가 발생했습니다 🥺
        <br />
        Not Found
      </S.Message>
      <S.Button onClick={handleNavigateHome}>메인으로 이동하기</S.Button>
    </S.Container>
  );
};

export default NotFound;
