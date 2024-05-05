import axios from "axios";

const { VITE_API_KEY } = import.meta.env;

const header = {
  Authorization: `Bearer ${VITE_API_KEY}`,
  accept: "application/json",
};

const movieAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: header,
  params: {
    language: "ko-KR",
  },
});

const SearchAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  headers: header,
  params: {
    include_adult: false,
    language: "ko-KR",
  },
});

export { movieAxios, SearchAxios };
