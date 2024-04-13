import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import * as MP from "./MainPage.style";

const MainPage = () => {
  return (
    <MP.Container>
      <Navbar />
      <MP.Wrapper>
        <Banner />
        <MP.FindBox>🍿 Find your movies !</MP.FindBox>
      </MP.Wrapper>
      <Footer />
    </MP.Container>
  );
};

export default MainPage;
