import axios from "axios";

// 나중에 api 요청 보낼 떄 인스턴스 객체에 .get 이렇게 접근하면 됨.
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    accept: "application/json",
    // Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
  },
});

export default axiosInstance;
