import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(46, 46, 46, 0.5);
`;
const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  z-index: 999;
  width: 350px;
  height: 150px;
  background-color: #fff;

  h2 {
    font-size: 13px;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
`;

const ButtonWrapper = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 200px;
`;

const YesBtn = styled.button`
  background-color: inherit;
`;

const NoBtn = styled.button`
  background-color: rgb(245, 113, 141);
  color: #fff;
`;

export { Container, Wrapper, ButtonWrapper, YesBtn, NoBtn };
