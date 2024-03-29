import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  margin: 20px 0 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
