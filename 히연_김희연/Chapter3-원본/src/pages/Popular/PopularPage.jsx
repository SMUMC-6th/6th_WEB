import { RingLoader } from 'react-spinners';
import Movie from '../../components/Movie';
import * as S from './PopularPage.style';

import { getMoviesData } from '../../hooks/getMoviesData';

const PopularPage = () => {
  const { movies, loading, error } = getMoviesData('popular');

  if (loading) {
    return (
      <S.Container>
        <RingLoader color='#36d7b7' size='80px' />
      </S.Container>
    );
  }
  return (
    <div className='app-container'>
      {movies.map((item, idx) => {
        return (
          <Movie
            key={idx}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </div>
  );
};

export default PopularPage;
