import React from "react";
import { CastContainer, CastImg } from "./Movies.style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";
const No_Image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

export default function Cast({ department, name, profile_path }) {
  let IMG_file;

  if (profile_path === null) {
    IMG_file = No_Image;
  } else {
    IMG_file = IMG_BASE_URL + profile_path;
  }

  return (
    <CastContainer>
      <CastImg src={IMG_file} />
      <h5>{department}</h5>
      <h6>{name}</h6>
    </CastContainer>
  );
}