import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./PostData.style";
import trendsAxios from "../../api/axios";

const PostData = () => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const take = 10;
  const nPage = Math.ceil(totalPosts / take);

  const btn = [...Array(nPage + 1).keys()].slice(1);
  // 처음에는 아래와 같은 방식으로 만들었음 ₩.~
  // let btn = new Array(nPage).fill(null);
  // btn = btn.map((_, idx) => idx + 1);

  const url = `/posts?page=${currentPage}&order__createdAt=ASC&take=${take}`;

  const fetchData = async () => {
    try {
      const res = await trendsAxios(url);
      setData(res.data.data);
      setTotalPosts(res.data.total);
    } catch (e) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <S.Container>
      <S.Wrapper>
        {data.map((e) => (
          <S.PostBox key={e.id}>
            <p>{e.id}</p>
            <div>
              <div>{e.title}</div>
              <span>{e.content}</span>
            </div>
          </S.PostBox>
        ))}
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.Button
          onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          $currentPage={currentPage}
          disabled={currentPage === 1}
        >
          뒤로
        </S.Button>
        {btn.map((e) => (
          <S.NmuberButton
            disabled={currentPage === e}
            onClick={() => setCurrentPage(e)}
            key={e}
          >
            {e}
          </S.NmuberButton>
        ))}
        <S.Button
          onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          disabled={currentPage === nPage}
        >
          앞으로
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default PostData;
