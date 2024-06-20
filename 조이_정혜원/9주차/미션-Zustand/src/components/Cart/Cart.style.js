import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-top: 50px;
  margin-bottom: 50px;

  h3 {
    margin-bottom: 50px;
    letter-spacing: 0.9px;
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const FooterWrapper = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 600px;
  border-top: 1.2px solid black;
  padding: 15px 20px;

  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
`;

export { Container, Wrapper, FooterWrapper };
