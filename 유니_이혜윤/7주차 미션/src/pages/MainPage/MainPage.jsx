import * as M from "./MainPage.style"
import SearchMovie from "../../components/SearchMovie/SearchMovie"
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(()=>{
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get('http://localhost:8080/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { name } = response.data;
        setUserName(name);
      } catch(error) {
        console.error(error);
      }
    };
    fetchUserData();
  },[]);

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
      <M.MainTop><p>🎬{userName ? `${userName}님, 환영합니다` : '환영합니다'}</p></M.MainTop>

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