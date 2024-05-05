import styled from 'styled-components';
import { MdOutlineMessage } from "react-icons/md";
import { GoHeart , GoHeartFill} from "react-icons/go";


const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  /* height: 20%; */
`;

const MessageIcon = styled(MdOutlineMessage)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 60%;
  /* margin-bottom: -5px; */
`; 

const FilledHeartIcon = styled(GoHeartFill)`
  fill: red;
  width: 25%;
  height: 60%;
`;

const NonFilledHeartIcon = styled(GoHeart)`
  color: black;
  width: 25%;
  height: 60%;
`

export { IconsContainer, MessageIcon, FilledHeartIcon, NonFilledHeartIcon};