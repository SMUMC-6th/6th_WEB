import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  width: 800px;
`;

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}

  width: 95%;
  height: 90px;

  background-color: ${(props) => props.theme.footerColor};
  border-radius: 15px;

  margin-bottom: 10px;

  h3 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }
`;

const QuestionBox = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN}
  width: 100%;
  padding: 0 40px;
`;

const AnswerBox = styled.div``;

export { Container, Wrapper, QuestionBox, AnswerBox };
