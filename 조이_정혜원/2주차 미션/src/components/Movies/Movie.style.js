import { styled } from "styled-components";

export const Container = styled.div`
  margin: 10px 7px 10px;
  position: relative;

  &:hover {
    cursor: pointer;
    transform: scale(0.98);
  }
`;

export const Wrapper = styled.div`
  background-color: #161720;
  color: white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 170px;
  height: 330px;

  overflow: hidden;

  img {
    width: 170px;
    height: 250px;
  }
`;

export const Box = styled.div`
  font-weight: bold;
  font-size: 13px;
  display: flex;
  justify-content: space-between;

  width: 170px;
  margin-top: 20px;
  padding: 0px 10px 0px;
`;
