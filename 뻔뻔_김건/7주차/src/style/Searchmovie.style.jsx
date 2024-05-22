import styled from "styled-components";

export const HomeDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const HomeMovieContainer = styled.div`
  position: relative;
  width: 250px;
  margin: 15px;
  background-color: rgb(3, 37, 65);
  border-radius: 6px;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const HomeMovieInfo = styled.div`
  display: flex;
  padding: 20px 0 20px 0;
  margin: 0 20px;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    font-weight: 15px;
    color: white;
  }

  span {
    color: white;
  }
`;

export const HomeImg = styled.img``;