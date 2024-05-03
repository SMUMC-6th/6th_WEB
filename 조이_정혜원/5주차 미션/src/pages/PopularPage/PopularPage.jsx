import requests from "../../constants/request";
import Movies from "../../components/Movies/Movies";
import * as MP from "../MainPage/MainPage.style";

const PopularPage = () => {
  return (
    <MP.Container>
      <Movies requestURL={requests.popular} />
    </MP.Container>
  );
};

export default PopularPage;
