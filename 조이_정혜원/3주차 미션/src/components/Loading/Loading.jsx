import styled from "styled-components";
import Spinner from "../../assets/spinner.gif";

const Loading = () => {
  return (
    <Container>
      <img src={Spinner} alt="loading.." />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  height: 750px;
  background-color: aliceblues;

  display: grid;
  place-items: center;
  img {
    width: 3%;
  }
`;
