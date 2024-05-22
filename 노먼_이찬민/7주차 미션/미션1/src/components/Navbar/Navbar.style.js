import styled, { css } from "styled-components";
import { Link } from "react-router-dom"; // 라우터의 링크 구현을 위해 import

const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(70, 70, 110);
  color: white;
`;

const Caption = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const PageLinkContainer = styled.div`
  width: 40%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const PageLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // 나중에 hover 이벤트 달아서 시각화하기
  width: 100%;
  font-size: 14px;
  color: ${(props) => props.color};
  font-weight: 600;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export { Container, Caption, PageLinkContainer, PageLink, Links };
