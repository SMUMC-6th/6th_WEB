import requests from "../../constants/request";
import Movies from "../../components/Movies/Movies";

import * as MP from "../MainPage/MainPage.style";

const TopRatedPage = () => {
  return (
    <MP.Container>
      <Movies requestURL={requests.topRated} />
    </MP.Container>
  );
};

export default TopRatedPage;
