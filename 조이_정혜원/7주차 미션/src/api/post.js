import { movieAxios } from "./axios";

const getMovies = async (requestURL, page) => {
  const { data } = await movieAxios(requestURL, {
    params: {
      page: page,
    },
  });

  return data;
};

export { getMovies };
