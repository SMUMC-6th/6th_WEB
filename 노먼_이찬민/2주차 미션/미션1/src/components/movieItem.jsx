import React from "react";
import { useState } from "react";

function MovieItem(props){
  const imageUrl = props.poster ? `https://image.tmdb.org/t/p/w500/${props.poster}` : '';
  const [isHovered, setIsHovered] = useState(false);

  return(
    <div className="item" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div>
        <img src={imageUrl} alt={props.title} />
        <div className="titleVote">
          <span>{props.title}</span>
          <p>{props.voteAverage}</p>
        </div>
      </div>
      {(isHovered && (<div className="itemDescription">
        <span>{props.title}</span>
        <span>{props.overview}</span>
      </div>))}
    </div>
    
  );
}

export default MovieItem;