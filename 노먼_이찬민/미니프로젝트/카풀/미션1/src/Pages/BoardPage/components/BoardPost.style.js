import styled from "styled-components";

const BoardBoxPost = styled.li`
  width: 100%;
  height: 9.8%; //???? 이거 border px만큼 조정을 해야하나
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  border-bottom: ${(props) => props.borderPx} solid black;
  /* margin: 0;
  padding: 0px; */
`;
const BoardBoxPostItem = styled.p`
  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight};
  font-weight: 600;
  font-size: 18px;
`;

export { BoardBoxPost, BoardBoxPostItem };
