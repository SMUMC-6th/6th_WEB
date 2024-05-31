import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 600px;
  height: 50px;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border: 0.1px solid #757575;
  }
`;

const MusicWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 0.8rem;
  letter-spacing: 0.8px;

  span {
    margin-left: 3px;
    margin-top: 5px;
    color: #857d7d;
  }
`;

const Title = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  font-weight: bold;
  font-size: 12px;
  p {
    padding: 0 2px;
  }
`;

const Amount = styled.div`
  width: 50px;
  ${theme.ALIGN.COLUMN_CENTER};

  svg {
    cursor: pointer;

    &:hover {
      color: rgb(255, 61, 103, 0.9);
    }
  }
`;

export { Container, Wrapper, Title, Amount, MusicWrapper };
