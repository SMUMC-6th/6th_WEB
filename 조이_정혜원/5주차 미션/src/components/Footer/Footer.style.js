import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  background-color: #090b13;

  width: 100%;
  height: 40px;

  p {
    position: absolute;
    top: 13px;
    right: 20px;

    color: rgb(237, 239, 245, 0.8);
    font-size: 11px;
  }
`;

export { Container };
