import * as S from "./MainPage.style";
import { About, AnimatedComponent, Info, New, Part, Project } from "../../components";
import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <Info />
      </S.Wrapper>
      <AnimatedComponent>
        <About />
      </AnimatedComponent>
      <AnimatedComponent>
        <Part />
      </AnimatedComponent>
      <AnimatedComponent>
        <Project />
      </AnimatedComponent>
      <AnimatedComponent>
        <New />
      </AnimatedComponent>
    </S.Container>
  );
};

export default MainPage;
