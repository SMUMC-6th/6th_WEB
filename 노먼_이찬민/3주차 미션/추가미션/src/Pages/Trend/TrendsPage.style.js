import styled from "styled-components";
import { Link } from "react-router-dom";

const TrendsPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  width: 100vw;
  height: 10vh;
  font-size: 36px;
  color: black;
  font-weight: bold;
`;

const PagenationBarContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const pagenationPrevButton = styled.button`
  width: 7%;
  height: 40%;
  margin-right: 1%;
`;

const pagenationNextButton = styled.button`
  width: 7%;
  height: 40%;
  margin-right: 1%;
`;

const pagenationButton = styled.button`
  width: 5%;
  height: 40%;
  margin-right: 1%;
`;

const Links = styled(Link)`
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export {
  TrendsPageContainer,
  Header,
  PagenationBarContainer,
  pagenationPrevButton,
  pagenationNextButton,
  pagenationButton,
  Links,
};
