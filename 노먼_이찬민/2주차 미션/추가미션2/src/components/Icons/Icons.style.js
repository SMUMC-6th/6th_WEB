import styled from 'styled-components';
import { MdOutlineMessage } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* height: 20%; */
`;

const MessageIcon = styled(MdOutlineMessage)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 85%;
  /* margin-bottom: -5px; */
`; 

const HeartIcon = styled(IoIosHeart)`
  border: 2px solid black;
  fill: ${(props) => props.isPressed? 'red' : 'rgb(255, 157, 190);'};
  width: 25%;
  height: 85%;
`;

export { IconsContainer, MessageIcon, HeartIcon};