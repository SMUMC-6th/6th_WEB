import * as S from "./Qna.style";
import { QNA } from "../../constants/info";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Qna = () => {
  const [seleted, setSelected] = useState(false);

  const handleSelected = () => {
    setSelected((prev) => !prev);
  };

  return (
    <S.Container>
      {QNA.map((item, idx) => (
        <S.Wrapper key={idx}>
          <S.QuestionBox>
            <h3>{item.question}</h3>
          </S.QuestionBox>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default Qna;
