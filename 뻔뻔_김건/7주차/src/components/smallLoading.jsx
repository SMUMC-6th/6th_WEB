import React from "react";
import { LoadingText, smallBackground } from "../style/Loading.style";
import Spinner from "./Spinner.gif";

export const smallLoading = () => {
  return (
    <smallBackground>
      <img src={Spinner} alt="로딩중" width="10%" />
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
    </smallBackground>
  );
};

export default smallLoading;