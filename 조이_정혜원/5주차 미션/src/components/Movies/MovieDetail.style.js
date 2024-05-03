import { styled } from "styled-components";

export const Container = styled.div`
  opacity: ${(props) => (props.$isHover ? "0.85" : "0")};
  transition: all 700ms ease-in-out 0s;
  background-color: #161720;
  color: white;
  border-radius: 5px;
  border: 3px solid rgba(249, 249, 249, 0.8);

  z-index: 1;
  position: absolute;
  top: 0;

  width: 170px;
  height: 330px;
`;

export const Wrapper = styled.div`
  font-size: 13px;
  padding: 15px;

  p {
    word-break: keep-all;
    margin-bottom: 10px;
  }
`;
