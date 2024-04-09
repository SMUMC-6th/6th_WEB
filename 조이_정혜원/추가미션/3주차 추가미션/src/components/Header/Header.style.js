import { FaCircle } from "react-icons/fa";
import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;

  height: 13%;

  div {
    position: absolute;
    top: 0;

    background-color: #e8e8e8;
    width: 100%;
    height: 20%;
  }

  h4 {
    margin-top: 20px;
    letter-spacing: 3px;
  }
`;

const Icon = styled.div`
  display: flex;
  padding: 2px;
  margin-left: 5px;
`;

const IconCircle = styled(FaCircle)`
  color: ${(props) => props.$color};
  width: 8px;
  height: 8px;

  margin: 2px;
`;

export { Container, Icon, IconCircle };
