import React from "react";
import { Background, LoadingText } from "./Movies.style";
import Spinner from "./Spinner.gif";

export const Loading = () => {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="25%" />
      <LoadingText>Wait a few minute.</LoadingText>
    </Background>
  );
};

export default Loading;