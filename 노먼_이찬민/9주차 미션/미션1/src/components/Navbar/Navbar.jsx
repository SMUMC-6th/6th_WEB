import * as S from "./Navbar.style";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCount } from "../../state/cart/cartSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <S.Container>
      <h2>UMC PlayList</h2>
      <S.NewCartIcon></S.NewCartIcon>
      <S.Count>{useSelector((state) => state.cart.totalCount)}</S.Count>
    </S.Container>
  );
};

export default Navbar;
