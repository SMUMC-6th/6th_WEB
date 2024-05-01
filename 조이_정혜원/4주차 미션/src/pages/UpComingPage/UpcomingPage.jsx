import requests from "../../constants/request";
import Movies from "../../components/Movies/Movies";

import * as MP from "../MainPage/MainPage.style";

const UpcomingPage = () => {
  return (
    <MP.Container>
      <Movies requestURL={requests.upComing} />
    </MP.Container>
  );
};

export default UpcomingPage;
