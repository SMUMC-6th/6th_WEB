import Banner from "../../components/Banner/Banner";
import * as MP from "./MainPage.style";

const MainPage = () => {
  return (
    <MP.Container>
      <MP.Wrapper>
        <Banner />
        <MP.FindBox>
          <p>🎥 Find your movies 🍿</p>
          <div>
            <input type="text" placeholder=" 검색어를 입력하세요" />
            <MP.searchImg />
          </div>
        </MP.FindBox>
      </MP.Wrapper>
    </MP.Container>
  );
};

export default MainPage;
