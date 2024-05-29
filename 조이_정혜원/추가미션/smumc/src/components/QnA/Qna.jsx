import * as S from "./Qna.style";
import { QNA } from "../../constants/info";
import QnaDetail from "./QnaDetail/QnaDetail";
import { Link } from "react-router-dom";
import { CONTECT_INFOS } from "../../constants/info";

const Qna = () => {
  return (
    <S.Container>
      {QNA.map((item, idx) => (
        <QnaDetail Qna={item} key={idx} />
      ))}
      <S.LinkBox>
        이외 질문은 <Link to={CONTECT_INFOS[2].data}>오픈카톡</Link>과 <Link to={CONTECT_INFOS[3].data}>DM</Link>을
        이용해주세요 !
      </S.LinkBox>
    </S.Container>
  );
};

export default Qna;
