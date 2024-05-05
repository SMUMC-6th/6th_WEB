import React from "react";
import { Banner, HomeContainer, HomeDiv } from "../components/Movies.style";
import Search from "../components/search";

export default function Home() {
  return (
    <HomeContainer>
      <HomeDiv>
        <Banner>
          환영합니다
        </Banner>
        <Search />
      </HomeDiv>
    </HomeContainer>
  );
}