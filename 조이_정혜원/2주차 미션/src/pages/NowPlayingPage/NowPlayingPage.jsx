import requests from "../../api/request";
import Movies from "../../components/Movies/Movies";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import * as MP from "../MainPage/MainPage.style";

const NowPlayingPage = () => {
  return (
    <MP.Container>
      <Navbar />
      <MP.Wrapper>
        <Movies requestURL={requests.nowPlaying} />
      </MP.Wrapper>
      <Footer />
    </MP.Container>
  );
};

export default NowPlayingPage;
