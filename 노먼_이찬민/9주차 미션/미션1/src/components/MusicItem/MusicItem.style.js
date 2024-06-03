import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100px;
  margin-bottom: 20px;
`;

const MusicImage = styled.div`
  width: 8vw;
  height: 8vw;
  background-image: url(${(props) => (props.imageURL ? props.imageURL : 0)});
  background-repeat: round;
`;
const DescriptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpButton = styled(FaAngleUp)``;
const DownButton = styled(FaAngleDown)``;

export {
  Container,
  MusicImage,
  DescriptContainer,
  SettingsContainer,
  UpButton,
  DownButton,
};
