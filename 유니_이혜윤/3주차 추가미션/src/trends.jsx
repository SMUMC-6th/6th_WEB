import axios from "axios";
import { useEffect, useState } from "react";
import * as S from './trends_styled'

function Trends () {
  const [trendsInfo, setTrendsInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const take = 10;
  
  // 마지막 인덱스 번호
  const lastIndex = currentPage * 10;
  // 첫번째 인덱스 번호
  const firstIndex = lastIndex - 10;
  // 0~9
  const records = trendsInfo.slice(firstIndex, lastIndex);

  // 20
  const nPage = Math.ceil(total / take);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  async function handlePostInfo(){
    try {
      const result = await axios.get(`http://localhost:3000/posts?page=${currentPage}&order__createdAt=ASC&take=${take}`);
   
      setTrendsInfo(result.data.data);
      setTotal(result.data.total);
      console.log(total);

    } catch (e) {
        console.error(e);
    }
  }

  useEffect(() => {
    handlePostInfo();
  }, [currentPage])

  console.log(trendsInfo)

  return (
    <S.Container>
      <S.Wrapper>
        <h1>MISSION</h1>
        {trendsInfo.map((trend) => {
        return(
            <S.Box key={trend.id}>
              <p>{trend.id}.</p>
              <div>
                <S.Title>{trend.title}</S.Title>
                <S.Content>{trend.content}</S.Content>
              </div>
            </S.Box>
          );
        })}
      </S.Wrapper>

      <S.ButtonWrapper>
        <button disabled = {currentPage === 1}
        onClick={() => {
          currentPage !== 1 && setCurrentPage((prev) => (prev) - 1);
        }}>뒤로</button>

        {numbers.map((number, idx) =>
         <button disabled={currentPage === number} key={idx} 
         onClick={() => setCurrentPage(number)}>{number}</button>)}

        <button disabled = {currentPage === nPage}
        onClick={() => {
          setCurrentPage((prev) => (prev) + 1);
        }}>앞으로</button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Trends;