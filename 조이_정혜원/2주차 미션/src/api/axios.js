import axios from "axios";

const { VITE_API_KEY } = import.meta.env;

const movieAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: VITE_API_KEY,
    language: "ko-KR",
  },
});

export default movieAxios;
