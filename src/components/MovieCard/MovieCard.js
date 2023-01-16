import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'

const MovieCard = (props) => {

  const { data } = props;

  return (
    
    <div className="card">
      <Link to={`/movie/${data.imdbID}`} style={{textDecoration: 'none'}}>
      <img src={data.Poster} className="card-img-top" alt={data.Title} />
      <div className="card-body" style={{color: 'black'}}>
        <h5 className="card-title" style={{textDecoration: 'none'}}>{data.Title}</h5>
        <p className="card-text">
          {data.Year}
        </p>
      </div>
      </Link>
    </div>
    

  )
}

export default MovieCard
