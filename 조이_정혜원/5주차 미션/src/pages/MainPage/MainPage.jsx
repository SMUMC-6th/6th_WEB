import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import * as MP from "./MainPage.style";
import SearchMovies from "../../components/Movies/SearchMovies/SearchMovies";

const MainPage = () => {
  const [search, setSearch] = useState();

  return (
    <MP.Container>
      <MP.Wrapper>
        <Banner />
        <MP.FindWrapper>
          <MP.FindBox>
            <p>🎥 Find your movies 🍿</p>
            <div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder=" 검색어를 입력하세요"
              />
              <MP.searchImg />
            </div>
          </MP.FindBox>
          {search ? (
            <MP.SearchBox>
              <SearchMovies search={search} />
            </MP.SearchBox>
          ) : null}
        </MP.FindWrapper>
      </MP.Wrapper>
    </MP.Container>
  );
};

export default MainPage;
