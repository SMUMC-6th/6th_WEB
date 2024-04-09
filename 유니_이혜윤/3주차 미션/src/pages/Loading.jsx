import Spinner from './Spin.gif';
import { Container } from './MoviePage.style';

const Loading = () => {
  return (
    <Container>
      <img src={Spinner} alt="loading.." />
    </Container>
  );
};

export default Loading;