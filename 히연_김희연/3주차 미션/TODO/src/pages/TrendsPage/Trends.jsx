import { useEffect, useState } from "react";
import axios from "axios";
import trendApi from "../../api/trends";
const Trends = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const datum = await axios.get("http://localhost:3000/posts");
        console.log(datum);
        setData(datum.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);
  return (
    <>
      <div>
        <ul>
          {data.map((data) => (
            <div>
              <div>{data.content}</div>
              <div>{data.title}</div>
              <br />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Trends;
