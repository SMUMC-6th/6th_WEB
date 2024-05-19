import React, { useState, useEffect } from "react";
import axios from "axios";
import { Banner, HomeContainer, HomeDiv } from "../style/Home.style";
import Search from "../components/Search";
import { useSelector } from "react-redux";

const Home = () => {
  const [name, setName] = useState("");
  const access = localStorage.getItem("accessToken");
  const isLogin = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    const fetchData = async () => {
      if (!isLogin) {
        setName("");
        return;
      }
      try {
        const result = await axios.get("http://localhost:8080/auth/me", {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        setName(result.data.name);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("사용자를 찾을 수 없습니다.");
        }
      }
    };

    fetchData();
  }, [access]);

  return (
    <HomeContainer>
      <HomeDiv>
        <Banner>환영합니다 {name}</Banner>
        <Search />
      </HomeDiv>
    </HomeContainer>
  );
};

export default Home;