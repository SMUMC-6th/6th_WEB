import React from "react";
import { Background, LoadingText } from "./Movies.style";
import Spinner from "./Spinner.gif";

export const Loading = () => {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="25%" />
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
    </Background>
  );
};

export default Loading;