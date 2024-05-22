import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const loading = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Img = styled.div`
  width: 170px;
  height: 250px;
  background-color: rgb(249, 249, 249, 0.1);
  margin-bottom: 10px;

  background: linear-gradient(90deg, rgb(249, 249, 249, 0.1), rgb(249, 249, 249, 0.17), rgb(249, 249, 249, 0.1));
  background-size: 200% auto;
  animation: ${loading} 4s infinite;
`;
const Box = styled.div`
  ${theme.ALIGN.ROW_SPACE_AROUND};

  width: 170px;

  div {
    width: 100px;
    height: 20px;
    background-color: rgb(249, 249, 249, 0.1);
    border-radius: 3px;

    background: linear-gradient(90deg, rgb(249, 249, 249, 0.1), rgb(249, 249, 249, 0.17), rgb(249, 249, 249, 0.1));
    background-size: 200% auto;
    animation: ${loading} 4s infinite;
  }

  p {
    width: 25px;
    height: 20px;
    background-color: rgb(249, 249, 249, 0.1);
    border-radius: 3px;

    background: linear-gradient(90deg, rgb(249, 249, 249, 0.1), rgb(249, 249, 249, 0.17), rgb(249, 249, 249, 0.1));
    background-size: 200% auto;
    animation: ${loading} 4s infinite;
  }
`;

export { Img, Box };
