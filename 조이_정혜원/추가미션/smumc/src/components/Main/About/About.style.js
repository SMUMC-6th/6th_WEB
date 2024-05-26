import styled from "styled-components";
import theme from "../../../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 60%;
  height: 430px;
  position: relative;

  border-radius: 10px;
  background-color: ${(props) =>
    props.theme === theme.darkTheme ? "rgb(123, 124, 129, 0.2)" : theme.lightTheme.footerColor};

  border: ${(props) => (props.theme === theme.darkTheme ? "" : "2px solid #f5f6f9")};

  @media ${theme.SCREEN_SIZE.MOBILE} {
    width: 270px;
    height: 410px;
  }
`;

const RImg = styled.img`
  position: absolute;
  top: 50px;
  right: -60px;
  width: 110px;
  height: 100px;
  opacity: 0.9;

  @media ${theme.SCREEN_SIZE.MOBILE} {
    right: -35px;
    width: 70px;
    height: 60px;
  }
`;
const LImg = styled(RImg)`
  top: 150px;
  left: -60px;

  @media ${theme.SCREEN_SIZE.MOBILE} {
    left: -35px;
  }
`;

const ContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    opacity: 0.9;
    letter-spacing: 2px;
    font-size: 45px;
    margin: 50px 0;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    h1 {
      font-size: 35px;
      margin: 50px 0 20px;
    }
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 80%;
  }
`;

const TextBox = styled.span`
  ${theme.ALIGN.ROW_CENTER};

  font-size: 12px;
  letter-spacing: 0.4px;
  font-family: ${(props) =>
    props.theme === theme.darkTheme ? theme.FONT.PRETENDARD_REGULAR : theme.FONT.PRETENDARD_MEDIUM};

  width: 95px;
  height: 30px;
  background-color: ${(props) =>
    props.theme === theme.darkTheme ? "rgb(1, 255, 111, 0.1)" : "rgb(86, 166, 121, 0.8)"};
  color: ${(props) => (props.theme === theme.darkTheme ? props.theme.primary : "#fff")};

  border-radius: 30px;
  margin: 10px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    font-size: 11px;
    width: 80px;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    font-size: 10px;
    width: 60px;
    height: 25px;
  }
`;

const TextBox2 = styled(TextBox)`
  width: 115px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 100px;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    width: 95px;
  }
`;

const TextBox3 = styled(TextBox)`
  background-color: ${(props) =>
    props.theme === theme.darkTheme ? "rgb(120, 250, 230, 0.1)" : "rgb(73, 186, 169,0.8)"};

  color: ${(props) => (props.theme === theme.darkTheme ? "rgb(120, 250, 230)" : "#fff")};
  width: 70px;
  margin: 10px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    width: 60px;
    margin: 5px 10px;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    width: 50px;
    margin: 5px 10px 0px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: -25%;
  width: 1000px;
  z-index: 1;

  div {
    ${theme.ALIGN.ROW_CENTER};
  }

  @media ${theme.SCREEN_SIZE.TABLET} {
    display: none;
  }
`;

const TabWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: -28%;
  width: 1000px;
  z-index: 1;

  .slick-prev::before,
  .slick-next::before {
    /* opacity: 0.3;
    font-size: 15px;
    font-family: ${theme.FONT.PRETENDARD_BOLD}; */
    display: none;
  }

  @media ${theme.SCREEN_SIZE.TABLET} {
    display: block;
    width: 220px;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    display: block;
    width: 200px;
    bottom: -23%;
  }
`;

export { Container, TextWrapper, ContextWrapper, TextBox, TextBox2, TextBox3, Wrapper, LImg, RImg, TabWrapper };
