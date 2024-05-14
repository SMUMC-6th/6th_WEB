import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSearchMovie = (search) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let debounceTimer;
    const delay = 300;
    
    const fetchData = async () => {
      if (!search) {
        setSearchResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=ko-KR&page=1`;

        const response = await axios.get(url,
          {
            params: {
              query: search,
            },
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
          }
        );
        setSearchResults(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fetchData, delay);

    return () => clearTimeout(debounceTimer);
  }, [search]);

  return { searchResults, loading, error };
};

export default useFetchSearchMovie;
