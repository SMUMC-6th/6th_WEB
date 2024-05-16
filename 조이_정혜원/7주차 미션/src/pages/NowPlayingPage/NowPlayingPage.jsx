import requests from "../../constants/request";
import * as MP from "../MainPage/MainPage.style";
import MoviesScroll from "../../components/Movies/MoviesScroll/MoviesScroll";

const NowPlayingPage = () => {
  return (
    <MP.Container>
      <MoviesScroll requestURL={requests.nowPlaying} />
    </MP.Container>
  );
};

export default NowPlayingPage;
