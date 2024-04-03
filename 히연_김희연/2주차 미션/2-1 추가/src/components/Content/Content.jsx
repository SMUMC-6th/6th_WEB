import * as MD from "./Content.style";
import flower from "../../assets/flower.jpeg";

const Content = ({ hide }) => {
  return (
    <MD.Container>
      {hide && (
        <>
          <MD.Hero>HERO</MD.Hero>
          <MD.Main>MAIN</MD.Main>
          <MD.Image src={flower} />
          <MD.Extra>EXTRA</MD.Extra>
        </>
      )}
    </MD.Container>
  );
};

export default Content;
