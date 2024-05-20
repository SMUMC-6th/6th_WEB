import * as S from "./Member.style";
import { MEMBERS } from "../../constants/members";
import MemberDetail from "./MemberDetail/MemberDetail";
import Leader from "./Leader/Leader";
import { useState } from "react";

const Member = ({ selected }) => {
  const currYear = 6;
  const [click, setClick] = useState(false);
  const [year, setYear] = useState(currYear);

  const handleSelect = (year) => {
    setYear(year);
    setClick((prev) => !prev);
  };

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
            {year !== "All" ? `${year}기` : "전체"}
            {click ? <S.ArrowIconUp /> : <S.ArrowIcon />}
          </S.Select>
          <S.Option $click={click}>
            <li onClick={() => handleSelect("All")}>전체</li>
            <li onClick={() => handleSelect(3)}>3기</li>
            <li onClick={() => handleSelect(4)}>4기</li>
            <li onClick={() => handleSelect(5)}>5기</li>
            <li onClick={() => handleSelect(6)}>6기</li>
          </S.Option>
        </S.SelectBox>

        <S.Container>
          {year !== "All"
            ? MEMBERS.filter((m) => m.year === year).map((m) =>
                m.position !== "챌린저" ? <Leader leader={m} key={m.id} /> : <MemberDetail member={m} key={m.id} />,
              )
            : MEMBERS.map((m) =>
                m.position !== "챌린저" ? <Leader leader={m} key={m.id} /> : <MemberDetail member={m} key={m.id} />,
              )}
        </S.Container>
      </>
    );
  }
};

export default Member;
