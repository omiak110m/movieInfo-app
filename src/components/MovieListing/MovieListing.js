import React from 'react';
import { useSelector } from 'react-redux';
import { getAllmovies, getAllshows } from '../../redux/movies/Movie';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.css';

const MovieListing = () => {

  const movies = useSelector(getAllmovies);
  const shows = useSelector(getAllshows);
  

  let renderMovies, renderShows = "";

  renderMovies = (movies.Response === 'True')? 
  (movies.Search.map((movie, index) => (
    <MovieCard key={index} data={movie}/>
  ))
  ) : (
    <div className = 'movies-error'>
      <h3>{movies.Error}</h3>
    </div>
  );


  renderShows = (shows.Response === 'True')? 
  (shows.Search.map((movie, index) => (
    <MovieCard key={index} data={movie}/>
  ))
  ) : (
    <div className = 'shows-error'>
      <h3>{shows.Error}</h3>
    </div>
  )

return (
  <div className='container '>
    <div className='text-center mb-4 mt-5' style={{color: 'whitesmoke'}}>
      <h2>Movies</h2>
      <div className='flex mt-5 mb-5'>
        {renderMovies}
      </div>
    </div>
    <div className='text-center mb-4 mt-5' style={{color: 'whitesmoke'}}>
      <h2>Shows</h2>
      <div className='flex mt-5 mb-5'>
        {renderShows}
      </div>
    </div>
  </div>
)
}

export default MovieListing
