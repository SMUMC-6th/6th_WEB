import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const take = 10;

  //마지막 인덱스 번호
  const lastIndex = currentPage * take;
  //첫번째 인덱스 번호
  const firstIndex = lastIndex - take;
  const records = posts.slice(firstIndex, lastIndex);

  const nPage = Math.ceil(total / take);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(`http://localhost:3000/posts?page=${currentPage}&take=${take}`);
      setPosts(response.data.data);
      setTotal(response.data.total);
    };

    getPosts();
  }, [currentPage]);

  return (
    <div>
      <ul>{posts.map((post) => {
        return (
          <div key={posts.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </div>
        );
      })}
      </ul>
      <div>
        <button
        disabled={currentPage === 1 }
         onClick={() => {
          currentPage !== 1 && setCurrentPage((prev) => prev - 1);
        }}>뒤로</button>
        {numbers.map((number, idx) => (<button 
        disabled={currentPage === number }key={idx} onClick={() => setCurrentPage(number)}>{number}</button>))}
        <button
          onClick={() => {
            currentPage !== nPage && setCurrentPage((prev) => prev + 1);
        }}>앞으로</button>
      </div>
    </div>
  );
}

export default App;
