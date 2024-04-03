import { useState } from "react";
import * as MD from "./Navbar.style";

const Navbar = ({ hide, setHide }) => {
  return (
    <MD.Container>
      <MD.Header>HEADER</MD.Header>
      <MD.Menu>
        <MD.Button onClick={() => setHide((prev) => !prev)}>
          {hide ? "Content 보지 않기!" : "Content 보기!"}
        </MD.Button>
      </MD.Menu>
    </MD.Container>
  );
};

export default Navbar;
