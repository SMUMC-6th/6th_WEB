import { useEffect, useState } from "react";
import { SearchAxios } from "../api/axios";

const useFetchSearchMovie = (search) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const controller = new AbortController();

  const fetchSearchMovies = async (search) => {
    setLoading(true);
    setError(false);

    try {
      const res = await SearchAxios(
        {
          params: {
            query: search,
          },
        },
        { signal: controller.signal },
      );
      setSearchResults(res.data.results);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search.trim() !== "") fetchSearchMovies(search);

    return () => {
      controller.abort();
    };
  }, [search]);

  return { searchResults, loading, error };
};

export default useFetchSearchMovie;
