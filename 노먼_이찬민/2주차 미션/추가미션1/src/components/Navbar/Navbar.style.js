import styled from "styled-components";

// css 속성 여기다 적기
// styled-components 는 대문자로 시작하는 게 관용적임
// 사용법 : (사용할 태그 이름) = styled.(적용할 원래 태그 이름)
const Container = styled.div`
  
  display: flex;
  width: 100%;
  height: 5%;
`;

// props를 받아서 styled-components 에서 css 속성을 ${}사용가능
const Header = styled.div`
  width: 20%;
  /* height: 5%; */
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Menu = styled.div`
  width: 80%;
  /* height: 5%; */
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HideButton = styled.button`
  /* border: 1px solid white; */
  width: 20%;
  height: 50%;
  background-color: pink;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
`

export { Container, Header, Menu, HideButton };