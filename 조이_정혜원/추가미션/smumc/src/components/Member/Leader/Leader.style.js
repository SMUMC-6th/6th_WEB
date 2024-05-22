import styled from "styled-components";
import { FaCrown } from "react-icons/fa6";
import theme from "../../../theme";

const Position = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: 15px;
  font-family: ${theme.FONT.PRETENDARD_MEDIUM};
  margin-bottom: 10px;
`;

const CrownIcon = styled(FaCrown)`
  color: ${(props) => (props.theme === theme.darkTheme ? "#f2de5a " : "#e6aa12")};
`;

export { Position, CrownIcon };
