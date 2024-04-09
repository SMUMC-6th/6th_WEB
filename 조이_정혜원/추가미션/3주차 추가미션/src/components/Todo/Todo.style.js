import { styled } from "styled-components";
import { FaRegSquarePlus } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddIcon = styled(FaRegSquarePlus)`
  height: 30px;
`;

export { Container, InputWrapper, AddIcon };
