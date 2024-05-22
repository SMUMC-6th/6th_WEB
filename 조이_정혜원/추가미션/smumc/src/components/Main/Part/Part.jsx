import * as S from "./Part.style";
import { PART } from "../../../constants/part";
import { useState } from "react";
import SelectedPart from "./SelectedPart/SelectedPart";

const Part = () => {
  const [selected, setSelected] = useState("PM");
  const selectArr = PART.filter((e) => e.part === selected);

  return (
    <S.Container>
      <h1>
        총 <b>6개</b>의 파트로 구성
      </h1>

      <S.Wrapper>
        {PART.map((e) => (
          <div
            key={e.id}
            onClick={() => {
              setSelected(e.part);
            }}
            className={selected === e.part ? "selected" : ""}
          >
            {e.part}
          </div>
        ))}
      </S.Wrapper>
      <SelectedPart partName={selectArr} />
    </S.Container>
  );
};

export default Part;
