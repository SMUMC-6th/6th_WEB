import { useState } from "react";
import * as S from "./QnaDetail.style";

const QnaDetail = ({ Qna }) => {
  const { question, answer } = Qna;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.Question onClick={() => setIsOpen((prev) => !prev)} $isOpen={isOpen}>
        <span>Q : {question}</span>
        <S.DownIcon $isOpen={isOpen} />
        <S.Answer $isOpen={isOpen}>
          <span>{answer}</span>
        </S.Answer>
      </S.Question>
    </S.Container>
  );
};

export default QnaDetail;
