import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import * as MP from "./MainPage.style";
import serchImg from "../../assets/search.png";

const MainPage = () => {
  return (
    <MP.Container>
      <Navbar />
      <MP.Wrapper>
        <Banner />
        <MP.FindBox>
          <p>🎥 Find your movies 🍿</p>
          <div>
            <input type="text" placeholder=" 검색어를 입력하세요" />
            <img src={serchImg} alt="serch" />
          </div>
        </MP.FindBox>
      </MP.Wrapper>
      <Footer />
    </MP.Container>
  );
};

export default MainPage;
