import styled from "styled-components";
import theme from "../../../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}

  h1 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    letter-spacing: 2px;
    margin-bottom: 80px;
    opacity: 0.9;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;

  @media ${theme.SCREEN_SIZE.TABLET} {
    gap: 50px;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 90%;
  height: 100%;
  display: none;

  div {
    ${theme.ALIGN.ROW_CENTER};
  }

  .slick-list {
    width: calc(330px * 1.03);
    height: calc(460px * 1.03);
  }

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  .slick-dots li button:before {
    color: ${(props) => props.theme.primary};
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    display: flex;
  }
`;

export { Container, Wrapper, MobileWrapper };
