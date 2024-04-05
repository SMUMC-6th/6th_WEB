import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  justify-content: space-between;
  background-color: rgb(70, 70, 110);
`

const Logo = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color : white;
`

const CopyRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color : white;
`

export { Container, Logo, CopyRight };