import { useState } from "react";
import * as S from "./MemberPage.style";
import { Member } from "../../components";

const MemberPage = () => {
  const [selected, setSelected] = useState(0); // Active Member

  return (
    <S.Container>
      <S.Wrapper>
        <S.SelectMenu>
          <h1 className={selected === 0 ? "selected" : ""} onClick={() => setSelected(0)}>
            Active Member
          </h1>
          <h1 className={selected === 1 ? "selected" : ""} onClick={() => setSelected(1)}>
            Member List
          </h1>
        </S.SelectMenu>
        <Member selected={selected} />
      </S.Wrapper>
    </S.Container>
  );
};

export default MemberPage;
