import * as E from "./Error.style";
import { useNavigate } from "react-router-dom";

const ErrorComponent = () => {
  const nav = useNavigate();

  return (
    <E.Container>
      <E.Wrapper>
        <p>데이터를 불러오지 못했습니다 💧</p>
        <button onClick={() => nav("/")}>메인화면으로 이동</button>
      </E.Wrapper>
    </E.Container>
  );
};

export default ErrorComponent;
