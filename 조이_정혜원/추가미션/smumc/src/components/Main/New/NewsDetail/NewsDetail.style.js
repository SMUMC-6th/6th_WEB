import styled from "styled-components";
import theme from "../../../../theme";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 64%;
    object-fit: cover;
  }

  opacity: ${(props) => (props.$isHover ? "1" : "0")};
  transition: all 700ms ease-in-out 0s;

  @media ${theme.SCREEN_SIZE.MOBILE} {
    position: absolute;
    top: 0;
    left: 0;
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export { Container };
