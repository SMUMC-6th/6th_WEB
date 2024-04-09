import { styled } from "styled-components";
import { FaPlus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddIcon = styled(FaPlus)`
  height: 30px;
`;

export { Container, InputWrapper, AddIcon };
