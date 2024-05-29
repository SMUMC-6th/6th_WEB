import { NEWS_INFOS } from "../../../constants/info";
import SliderComponent from "../../SliderComponent/SliderComponent";
import * as S from "./New.style";
import News from "./News/News";

const New = () => {
  return (
    <S.Container>
      <h1>최근 소식</h1>
      <S.Wrapper>
        {NEWS_INFOS.map((news) => (
          <News key={news.id} news={news} />
        ))}
      </S.Wrapper>
      <S.MobileWrapper>
        <SliderComponent dots={true}>
          {NEWS_INFOS.map((news) => (
            <News key={news.id} news={news} />
          ))}
        </SliderComponent>
      </S.MobileWrapper>
    </S.Container>
  );
};

export default New;
