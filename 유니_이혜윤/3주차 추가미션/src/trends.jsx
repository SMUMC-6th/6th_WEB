import axios from "axios";
import { useEffect, useState } from "react";
import * as S from './trends_styled'

function Trends () {
  const [trendsInfo, setTrendsInfo] = useState([]);

  async function handlePostInfo(){
    try {
      const result = await axios.get('http://localhost:3000/posts?page=1&order__createdAt=ASC&take=10');
   
      setTrendsInfo(result.data.data)

    } catch (e) {
        console.error(e);
    }
  }

  useEffect(() => {
    handlePostInfo();
  }, [])
  console.log(trendsInfo)

  return (
    <S.Container>
      <h1>MISSION</h1>
        {trendsInfo.map((trend) => {
        return(
            <S.Box>
              <S.Id>{trend.id}</S.Id>
              <S.Title>{trend.title}</S.Title>
              <S.Content>{trend.content}</S.Content>
            </S.Box>
          );
        })}
    </S.Container>
  );
};

export default Trends;