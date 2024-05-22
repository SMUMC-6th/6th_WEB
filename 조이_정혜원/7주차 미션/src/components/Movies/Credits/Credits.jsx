import { useEffect, useState } from "react";
import * as S from "./Credits.style";
import { movieAxios } from "../../../api/axios";
import Credit from "./Credit";

const Credits = ({ id }) => {
  const [credits, setCredits] = useState({
    cast: [],
    crew: [],
  });

  const { cast, crew } = credits;

  const fetchCredits = async () => {
    try {
      const res = await movieAxios(`${id}/credits`);
      setCredits({ ...credits, cast: res.data.cast, crew: res.data.crew });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCredits();
  }, [id]);

  return (
    <>
      <S.Wrapper>
        <S.CreditWrapper>
          <Credit credits={cast} />
        </S.CreditWrapper>
        <S.CreditWrapper>
          <Credit credits={crew} />
        </S.CreditWrapper>
      </S.Wrapper>
    </>
  );
};

export default Credits;
