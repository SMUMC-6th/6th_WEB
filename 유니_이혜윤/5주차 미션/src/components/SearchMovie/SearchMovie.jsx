import { useEffect, useState } from "react";
import axios from "axios";
import * as SM from "./SearchMovie.style"

const SearchMovie = ({ search }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      if (!search) {
        setSearchResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
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

    fetchData();
  }, [search]);

  return (
    <SM.Container>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {searchResults.length > 0 && (
        <SM.Content>
          {searchResults.map((movie) => (
            <SM.Box key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </SM.Box>
          ))}
        </SM.Content>
      )}
    </SM.Container>
  );
};

export default SearchMovie;
