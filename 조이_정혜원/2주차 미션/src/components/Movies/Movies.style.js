import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  margin: 20px 0 20px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 479px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
