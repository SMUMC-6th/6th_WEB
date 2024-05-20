import * as S from "./Member.style";
import { MEMBERS } from "../../constants/members";
import MemberDetail from "./MemberDetail/MemberDetail";
import Leader from "./Leader/Leader";
import { useState } from "react";

const Member = ({ selected }) => {
  const currYear = 6;
  const [click, setClick] = useState(false);
  const [year, setYear] = useState(currYear);

  const handleSelect = () => {};

  if (!selected)
    // Active Member
    return (
      <S.Container>
        {MEMBERS.filter((m) => m.year === currYear).map((m) =>
          m.position !== "챌린저" ? <Leader leader={m} key={m.id} /> : <MemberDetail member={m} key={m.id} />,
        )}
      </S.Container>
    );
  else {
    return (
      <>
        <S.SelectBox>
          <S.Select onClick={() => setClick((prev) => !prev)}>
            {year !== "All" ? `${year}기` : "전체"} <S.ArrowIcon />
          </S.Select>
          <S.Option $click={click}>
            <li onClick={() => setYear("All")}>전체</li>
            <li onClick={() => setYear(3)}>3기</li>
            <li onClick={() => setYear(4)}>4기</li>
            <li onClick={() => setYear(5)}>5기</li>
            <li onClick={() => setYear(6)}>6기</li>
          </S.Option>
        </S.SelectBox>

        <S.Container>
          {MEMBERS.filter((m) => m.year === currYear).map((m) =>
            m.position !== "챌린저" ? <Leader leader={m} key={m.id} /> : <MemberDetail member={m} key={m.id} />,
          )}
        </S.Container>
      </>
    );
  }
};

export default Member;
