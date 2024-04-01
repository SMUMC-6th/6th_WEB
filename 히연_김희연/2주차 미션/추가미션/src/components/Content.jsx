import React from "react";
import Hero from "./Hero";
import Main from "./Main";
import Image from "./Image";
import Extra from "./Extra";

export default function content() {
  return (
    <div className="Content">
      <Hero />
      <Main />
      <Image />
      <Extra />
    </div>
  );
}
