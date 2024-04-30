import axios from "axios";

const trendsAxios = axios.create({
  baseURL: "http://localhost:3000",
});

export default trendsAxios;
