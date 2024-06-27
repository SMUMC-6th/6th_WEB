import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusics } from './musicsSlice';
import ClipLoader from 'react-spinners/ClipLoader';


const YourComponent = () => {
  const dispatch = useDispatch();
  const musics = useSelector((state) => state.musics.musics);
  const status = useSelector((state) => state.musics.status);
  const error = useSelector((state) => state.musics.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMusics());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  if (status === 'loading') {
    return (
      <div>
        <ClipLoader color="#0000ff" loading={true} size={50} />
      </div>
    );
  }

  if (status == 'failed') {
    alert(error);
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Music List</h1>
      <ul>
        {musics.map((music) => (
          <li key={music.id}>{music.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
