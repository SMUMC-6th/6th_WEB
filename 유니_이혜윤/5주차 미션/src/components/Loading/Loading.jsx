import Spinner from '../../assets/Spin.gif';
import styled from "styled-components";


const Container = styled.div`
  background-color: #202144;
  height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 5%;
  }
`;

const Loading = () => {
  return (
    <Container>
      <img src={Spinner} alt="loading.." />
    </Container>
  );
};

export default Loading;