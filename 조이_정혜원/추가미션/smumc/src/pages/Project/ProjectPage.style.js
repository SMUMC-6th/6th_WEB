import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  margin-top: 140px;
  margin-bottom: 50px;
  color: inherit;
  height: 100%;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100%;

  h1 {
    margin-bottom: 30px;
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    letter-spacing: 2px;
  }
`;

const Text = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: 15px;
  letter-spacing: 0.5px;
  ${theme.FONT.PRETENDARD_MEDIUM};
`;

const Select = styled.div`
  text-align: center;
  padding: 15px 0;
  background-color: ${(props) => props.theme.footerColor};
  color: ${theme.COLOR.GRAY};
  font-family: ${theme.FONT.PRETENDARD_MEDIUM};

  border-radius: 30px;

  span {
    font-size: 20px;
    width: 25%;
    border-radius: 30px;
    padding: 15px 35px;
    background-color: ${(props) => props.theme.footerColor};

    &:hover {
      cursor: pointer;
    }

    &.selected {
      color: #fff;
      background-color: ${(props) => props.theme.primary};
    }
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    span {
      font-size: 15px;
      padding: 15px 28px;
    }
  }
`;

const ProJect = styled.div`
  margin-top: 50px;
`;

export { Container, Wrapper, Select, ProJect, Text };
