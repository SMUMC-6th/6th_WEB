import { FaHeart, FaRegHeart } from "react-icons/fa";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  p {
    margin-bottom: 10px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 380px;

  border-radius: 10px;
  background-color: #d5abde;

  overflow: hidden;

  img {
    height: 70%;
  }
`;

const Title = styled.div`
  height: 13%;
  display: grid;
  place-items: center;

  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 17%;
  width: 100%;

  padding: 20px;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const Heart = styled(FaRegHeart)`
  display: ${(props) => (props.$isClicked ? "none" : "block")};
`;

const FullHeart = styled(FaHeart)`
  display: ${(props) => (props.$isClicked ? "block" : "none")};
  color: red;
`;

export { Wrapper, Box, Title, Content, Heart, FullHeart };
