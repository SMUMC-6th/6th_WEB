import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as SM from "./SearchMovie.style"
import useFetchSearchMovie from "../../hook/useFetchSearchMovie";

const SearchMovie = ({ search }) => {
  const { searchResults, loading, error } = useFetchSearchMovie(search);

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = (movieId) => {
    console.log(movieId)
    navigate(`/movie/${movieId}`, { state: { id:movieId } });
  }

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
            <SM.Box key={movie.id} onClick = {()=>handleClick(movie.id)} >
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
