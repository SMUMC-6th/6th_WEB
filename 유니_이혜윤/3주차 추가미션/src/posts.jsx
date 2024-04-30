const posts = ({info}) => {
  return (
    <>
    
      {info !== undefined ? info.map((data, idx) => {
        return (
          <div key={idx}>

            <span className='no'>{data.id}</span>
    
            <span className='title'>{data.title}</span>

            <span className='content'>{data.content}</span>
          </div>
        )
      }) : null}
    </>
  )
}

export default posts