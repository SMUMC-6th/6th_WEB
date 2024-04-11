import { styled } from "styled-components";

const Conatiner = styled.div`
  position: relative;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 200px;
    margin: 10px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${(props) => props.$backgroudImg});
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 0.2;

    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
`;

export { Conatiner, Content };
