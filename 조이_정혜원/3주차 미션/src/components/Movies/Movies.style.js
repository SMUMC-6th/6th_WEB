import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(4, 1fr);

  margin: 20px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { Container, MovieContainer };
