import requests from "../../api/request";
import Movies from "../../components/Movies/Movies";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import * as MP from "../MainPage/MainPage.style";

const NowPlayingPage = () => {
  return (
    <MP.Container>
      <Navbar />
      <Movies requestURL={requests.nowPlaying} />
      <Footer />
    </MP.Container>
  );
};

export default NowPlayingPage;
