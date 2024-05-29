import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 30px;
  border-radius: 10px;
  background-color: aliceblue;
  margin-bottom: 10px;
  padding: 0 10px;

  div {
    padding-left: 10px;
    width: 80%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export { Container };
