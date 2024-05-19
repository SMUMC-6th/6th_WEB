import React from "react";
import { Background, LoadingText } from "../style/Loading.style";
import Spinner from "./Spinner.gif";

export const Loading = () => {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="50%" />
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
    </Background>
  );
};

export default Loading;