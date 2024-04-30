import React from "react";
import { useState, useEffect } from "react";

export default function getPosts(page, take) {
  // 버튼을 누를때마다 page가 바뀌면서 이 함수 호출
  const [PostItem, setPostItem] = useState([]);
  const [total, setTotal] = useState(0);

  const URL = `http://localhost:3000/posts?page=${page}&order__createdAt=ASC&take=${take}`;
  useEffect(() => {
    async function getPostsItem() {
      try {
        const posts = await fetch(URL);
        const data = await posts.json();
        setPostItem(data.data);
        console.log(PostItem);
        setTotal(data.total);
      } catch (error) {
        console.error(error);
      }
    }

    getPostsItem();
  }, [page]);

  console.log(PostItem, total);
  return { PostItem, total };
}

export { getPosts };
