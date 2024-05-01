import requests from "../../constants/request";
import Movies from "../../components/Movies/Movies";

import * as MP from "../MainPage/MainPage.style";

const NowPlayingPage = () => {
  return (
    <MP.Container>
      <Movies requestURL={requests.nowPlaying} />
    </MP.Container>
  );
};

export default NowPlayingPage;
