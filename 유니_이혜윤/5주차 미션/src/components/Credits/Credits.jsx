import { useEffect, useState } from "react";
import axios from "axios";
import Credit from "./Credit";
import * as C from "./Credits.style"

const Credits = ({id}) => {
  const [credits, setCredits] = useState({
    cast: [],
    crew: [],
  });
  const {cast, crew} = credits;

  const fetchCredits = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=ko&page=2`;

      const res = await axios.get(url,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        }
      );

      setCredits({...credits, cast: res.data.cast, crew: res.data.crew});
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(()=>{
    fetchCredits();
  }, [id]);

  return (
    <C.Container>
      <C.Content>
        <Credit credits={cast} />
      </C.Content>
      <C.Content>
        <Credit credits={crew} />
      </C.Content>
    </C.Container>
  )
}

export default Credits;