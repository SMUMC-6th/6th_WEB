import * as M from "./MainPage.style"
import SearchMovie from "../../components/SearchMovie/SearchMovie"
import { useState } from "react";

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    setShowResults(inputValue !== '');
  };

  return (
    <M.MainContainer>
      <M.MainTop><p>🎬환영합니다</p></M.MainTop>

      <M.MainBottom>
        Find your movies !<br />
        <M.Search>
          <input type="text" value={search} onChange={handleInputChange} placeholder="검색어를 입력하세요" />
          <button onClick={handleSearch}>🔍</button>
        </M.Search>
        {showResults && (
          <M.SearchBox>
            <SearchMovie search={search} />
          </M.SearchBox>
        )}
      </M.MainBottom>
    </M.MainContainer>
  )
}

export default MainPage;