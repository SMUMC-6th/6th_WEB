import axiosInstance from "./axiosInstance";

const getMovies = async (category, pageParams) => {
  const { data } = await axiosInstance.get(
    `/movie/${category}?language=ko-KR&page=${pageParams}`
  );

  //promise의 <pending> 상태
  return data;
};

export { getMovies };
