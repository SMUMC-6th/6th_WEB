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
  right: 23%;
  top: 2%;
  font-size: 18px;
  border-radius: 50%;
  border: 3px solid rgba(159, 184, 254, 1);
  background-color: rgba(159, 184, 254, 1);
  color: rgba(235, 254, 244, 1);
`;

const NewCartIcon = styled(BsBagPlus)`
  width: 10%;
  height: 50%;
`;

export { Container, Count, NewCartIcon };
