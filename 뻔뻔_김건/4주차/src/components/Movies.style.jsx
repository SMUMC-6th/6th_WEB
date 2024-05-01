import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  desktop: "992px",
  largeDesktop: "1200px",
};

const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  place-items: center;
  background-color: #36517a;
  padding: 20px;

  ${respondTo.tablet`
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  `}
`;

export const MovieContainer = styled.div`
  position: relative;
  width: 250px;
  margin: 15px;
  background-color: rgb(3, 37, 65);
  border-radius: 6px;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }

  ${respondTo.tablet`
    width: 300px;
  `}
`;

export const Hoverbox = styled.div`
  position: absolute;
  height: 100%;
  padding: 10px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);

  h1 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  p {
    display: block;
    height: 100%;
    color: white;
    max-height: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px 0 20px 0;
  margin: 0 20px;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    font-weight: 15px;
    color: white;
  }

  span {
    color: white;
  }

  ${respondTo.tablet`
    padding: 20px;
  `}
`;

export const RootWarp = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;

export const NavbarContainer = styled.div`
  background-color: #0E0F37;
  height: 128px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${respondTo.tablet`
    height: 80px;
  `}
`;

export const LogoBox = styled.div`
  text-decoration: none;
  margin-left: 20px;
`;

export const LinkPage = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavbarItem = styled.div`
  display: flex;
  gap: 28px;
  font-weight: bold;
  margin-right: 20px;

  h1 {
    color: white;
  }
`;

export const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#E50915",
  textAlign: "center",
};

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
`;

export const Button = styled.div`
  background-color: transparent;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Banner = styled.div`
  background-color: rgba(1, 1, 1, 0.7);
  text-align: center;
  color: white;
  font-size: 45px;
  width: 100%;
  height: 230px;
  white-space: pre-wrap;
  padding: 50px;
`;

export const DetailContext = styled.div`
  margin: 100px;
  color: white;
  h1 {
    font-size: 55px;
  }

  h2 {
    font-size: 40px;
    display: grid;
    gap: 4px;
  }

  h3 {
    font-size: 30px;
  }
`;

export const DetailImg = styled.img`
  margin: 50px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  height:100vh;
  background-color: #0E0F37;
`;

export const NotfoundContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;