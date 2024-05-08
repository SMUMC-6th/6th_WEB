import * as S from "./Credit.style";

const Credit = ({ credits }) => {
  const profile = import.meta.env.VITE_POSTER_URL;
  const noImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

  return (
    <>
      {credits.map((e) => (
        <S.Container key={e.credit_id}>
          <img src={e.profile_path ? `${profile}/${e.profile_path}` : noImg} />
          <p>{e.name}</p>
        </S.Container>
      ))}
    </>
  );
};

export default Credit;
