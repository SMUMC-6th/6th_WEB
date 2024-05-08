import { useEffect, useState } from "react";
import { SearchAxios } from "../api/axios";
import useDebounce from "./useDebounce";

const useFetchSearchMovie = (search) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const controller = new AbortController();
  const debounceSearch = useDebounce(search, 500);

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
    fetchSearchMovies(debounceSearch);

    return () => {
      controller.abort();
    };
  }, [debounceSearch]);

  return { searchResults, loading, error };
};

export default useFetchSearchMovie;
