import styled, { css } from "styled-components";
import { BsBagPlus } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(144, 201, 234, 1);
`;

const Count = styled.div`
  position: absolute;
  right: 19%;
`;

const NewCartIcon = styled(BsBagPlus)`
  width: 10%;
  height: 50%;
`;

export { Container, Count, NewCartIcon };
