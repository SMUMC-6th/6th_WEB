import { useState } from "react";
import * as S from "./SelectedPart.style";

const SelectedPart = ({ partName }) => {
  const { part, description } = partName[0];
  const [des, setDes] = useState(
    "UIKit와 SwiftUI를 이용해서 이용해서 iOS 앱 서비스를 만들 수 있는 능력을 기를 수 있습니다. 자신의 성장을 위해 열정적으로 도전하는 사람들과 함께 활동에 필요한 부분들을 학습할 수 있습니다.",
  );

  const [selected, setSelected] = useState("iOS");

  const handleClick = (des, part) => {
    setDes(des);
    setSelected(part);
  };

  if (part === "개발자") {
    return (
      <S.Container>
        <S.Wrapper>
          {description.map((e) => (
            <button
              key={e.id}
              onClick={() => handleClick(e.description, e.part)}
              className={selected === e.part ? "selected" : null}
            >
              {e.part}
            </button>
          ))}
        </S.Wrapper>
        <S.TextBox>
          <span>{des}</span>
        </S.TextBox>
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <S.TextBox>
          <span>{description}</span>
        </S.TextBox>
      </S.Container>
    );
  }
};

export default SelectedPart;
