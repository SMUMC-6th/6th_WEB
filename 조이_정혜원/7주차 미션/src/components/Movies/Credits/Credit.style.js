import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  width: 100px;
  height: 100px;

  &:hover {
    img {
      transform: scale(1.05);
    }

    p {
      color: rgba(126, 247, 205);
    }

    cursor: grab;
  }

  p {
    text-align: center;
    font-size: 11px;
    margin-top: 10px;
    opacity: 0.8;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export { Container };
