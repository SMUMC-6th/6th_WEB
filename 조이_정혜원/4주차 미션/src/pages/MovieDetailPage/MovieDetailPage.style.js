import { styled, keyframes } from "styled-components";

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
    box-shadow: 1px 0px 38px 12px rgba(0, 0, 0, 0.47);
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
    opacity: 0.15;
    filter: blur(2px);

    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 350px;

  margin-left: 30px;

  h3 {
    font-size: 23px;
    margin-bottom: 23px;
    text-shadow: 0 0 11px rgba(255, 255, 255, 0.6);
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    word-break: keep-all;
    font-size: 13px;
  }
`;

export { Conatiner, Content };
