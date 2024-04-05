import requests from "../../api/request";
import Movies from "../../components/Movies/Movies";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import * as MP from "../MainPage/MainPage.style";
import * as NP from "./NowPlayingPage.style";

const NowPlayingPage = () => {
  return (
    <MP.Container>
      <Navbar />
      <NP.MovieContainer>
        <Movies requestURL={requests.nowPlaying} />
      </NP.MovieContainer>
      <Footer />
    </MP.Container>
  );
};

export default NowPlayingPage;
