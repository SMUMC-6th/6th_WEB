import * as S from "./AboutBox.style";

const AboutBox = ({ title, text }) => {
  return (
    <S.Container>
      <p>{title}</p>
      <h3>{text}</h3>
    </S.Container>
  );
};

export default AboutBox;
