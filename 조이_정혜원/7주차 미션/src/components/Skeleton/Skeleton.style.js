import styled from "styled-components";
import theme from "../../styles/theme";

const Img = styled.div`
  width: 170px;
  height: 250px;
  background-color: rgb(249, 249, 249, 0.1);
  margin-bottom: 10px;
`;
const Box = styled.div`
  ${theme.ALIGN.ROW_SPACE_AROUND};

  width: 170px;

  div {
    width: 100px;
    height: 20px;
    background-color: rgb(249, 249, 249, 0.1);
    border-radius: 3px;
  }

  p {
    width: 25px;
    height: 20px;
    background-color: rgb(249, 249, 249, 0.1);
    border-radius: 3px;
  }
`;

export { Img, Box };
