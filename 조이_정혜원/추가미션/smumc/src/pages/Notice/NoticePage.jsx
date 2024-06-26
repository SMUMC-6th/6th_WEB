import Qna from "../../components/QnA/Qna";
import * as S from "./NoticePage.style";
import { useEffect } from "react";

const NoticePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <h1>자주 묻는 질문</h1>
        <Qna />
      </S.Wrapper>
    </S.Container>
  );
};

export default NoticePage;
