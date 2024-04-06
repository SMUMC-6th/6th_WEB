import requests from "../../api/request";
import Movies from "../../components/Movies/Movies";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import * as MP from "../MainPage/MainPage.style";

const PopularPage = () => {
  return (
    <MP.Container>
      <Navbar />
      <Movies requestURL={requests.popular} />
      <Footer />
    </MP.Container>
  );
};

export default PopularPage;
