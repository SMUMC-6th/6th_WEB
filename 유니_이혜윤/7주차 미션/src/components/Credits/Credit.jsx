import * as C from "./Credit.style"

const Credit = ({credits}) => {
  const noImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

  return (
    <>
      {credits.map((e) => (
        <C.Container key={e.credit_id}>
          <img src={e.profile_path ? "https://image.tmdb.org/t/p/original" + e.profile_path : noImg} />
          <p>{e.name}</p>
        </C.Container>
      ))}
    </>
  )
}

export default Credit;