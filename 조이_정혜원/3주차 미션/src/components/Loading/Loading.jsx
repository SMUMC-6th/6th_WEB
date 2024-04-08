import Spinner from "../../assets/spinner.gif";
import { Container } from "./Loading.style";

const Loading = () => {
  return (
    <Container>
      <img src={Spinner} alt="loading.." />
    </Container>
  );
};

export default Loading;
