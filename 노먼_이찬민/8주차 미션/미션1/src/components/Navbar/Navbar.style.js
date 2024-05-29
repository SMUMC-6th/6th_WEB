import styled, { css } from "styled-components";
import { Link } from "react-router-dom"; // 라우터의 링크 구현을 위해 import
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(70, 70, 110);
  color: white;
`;

const Caption = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PageLinkContainer = styled.div`
  width: 40%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1180px) {
    width: 50%;
  }

  /* @media (max-helmet: 767px)  */
`;

const registerAndLoginBox = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const PageLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // 나중에 hover 이벤트 달아서 시각화하기
  width: 100%;
  font-size: 14px;
  color: ${(props) => props.color};
  font-weight: 600;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

const SubMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  display: flex;
  gap: 30px;
  width: 50vw;
  /* height: 50vh; */
  top: 10%;
  left: 50vw;
  justify-content: center;
  align-items: flex-start;
  background-color: rgb(50, 50, 60);
  overflow-y: auto;
  /* overflow: hidden; */
  /* z-index: 10000; */
`;

const SubMenuItem = styled(Link)`
  width: 100%;
  height: 50px;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(60, 60, 80);
  border-radius: 10px;

  p:hover {
    cursor: pointer;
    transform: scale(1.15);
  }

  @media (max-width: 767) {
    height: 80px;
  }
`;

const HamburgerBar = styled(FaBars)`
  width: 30px;
  height: 30px;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export {
  Container,
  Caption,
  PageLinkContainer,
  registerAndLoginBox,
  PageLink,
  Links,
  SubMenuContainer,
  SubMenuItem,
  HamburgerBar,
};
