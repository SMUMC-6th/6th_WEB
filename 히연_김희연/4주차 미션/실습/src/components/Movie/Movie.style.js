import styled from "styled-components";

const MovieContainer = styled.div`
  position: relative;
  width: 190px;
  margin: 15px;
  border-radius: 5px;
  background-color: #373b69;
  color: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const MovieWrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: lightgray;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const MovieBox = styled.div`
  margin: 20px;
  font-size: 15px;
`;

const MovieExplain = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 11;
  -webkit-box-orient: vertical;
`;

const MovieImage = styled.img`
  max-width: 100%;
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 20px;
`;

export {
  MovieContainer,
  MovieWrapper,
  MovieBox,
  MovieExplain,
  MovieImage,
  MovieInfo,
};
