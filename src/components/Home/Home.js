import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../redux/movies/Movie';
import { fetchAsyncShows } from '../../redux/movies/Movie';


const Home = () => {

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  },[dispatch ]);
  

  return (
    <div>
      <div></div>
      <MovieListing/>
    </div>
  )
}

export default Home
