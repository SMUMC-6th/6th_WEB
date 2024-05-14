import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as SM from "./SearchMovie.style"
import useFetchMovie from "../../hook/useFetchMovie";

const SearchMovie = ({ search }) => {
  const {searchResults, error} = useFetchMovie(search);
  const [loading, setLoading] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = (movieId) => {
    navigate(`/movie/${search.id}`, { state: { movie: search } });  // search로 받는데 DetailPage에서 movie로 받아
  }

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

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fetchData, delay);

    return () => clearTimeout(debounceTimer);
  }, [search]);

  return (
    <SM.Container>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {searchResults.length > 0 && (
        <SM.Content 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer' }}>
          {searchResults.map((movie) => (
            <SM.Box key={movie.id} onClick = {handleClick} >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>

              {isHovered && (
              <SM.Hover>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </SM.Hover>
            )}
            </SM.Box>
          ))}
        </SM.Content>
      )}
    </SM.Container>
  );
};

export default SearchMovie;
