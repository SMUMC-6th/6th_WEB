import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  
  margin-top: 50px;
  font-size: 30px;
  font-weight: bold;
`;


const Header = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <Container>
      
      <p>UMC Redux-Toolkit 카운터 실습 {count} </p>

    </Container>
  )
}

export default Header;