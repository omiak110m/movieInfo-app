import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieorShowDetails,
  getallMoviesandShows,
  removeSelectedmovieorshow,
} from "../../redux/movies/Movie";
import { FaImdb } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getallMoviesandShows);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieorShowDetails(imdbID));
    dispatch(removeSelectedmovieorshow());
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section container">
      {Object.keys(data).length === 0 ?
        (<div>....Loading</div>
        ) : (
          <>
            <div className="section-left mx-3">
              <div className="movie-title mb-4">{data.Title}</div>
              <div className="movie-rating mb-3">
                <span>
                  IMDB Rating{" "}
                  <i className="icon">
                    <FaImdb />
                  </i>
                  : {data.imdbRating}
                </span>
                <span>
                  IMDB Votes{" "}
                  <i className="icon">
                    <FaThumbsUp />
                  </i>{" "}
                  : {data.imdbVotes}
                </span>
                <span>
                  Runtime{" "}
                  <i className="icon">
                    <FaRunning />
                  </i>{" "}
                  : {data.Runtime}
                </span>
                <span>
                  Year{" "}
                  <i className="icon">
                    <FaCalendarAlt />
                  </i>{" "}
                  : {data.Year}
                </span>
              </div>
              <div className="movie-plot mb-3">{data.Plot}</div>
              <div className="movie-info">
                <div>
                  <sapn>Director: </sapn>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <sapn>Actors: </sapn>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <sapn>Generes: </sapn>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <sapn>Languages: </sapn>
                  <span>{data.Language}</span>
                </div>
                <div className="mb-3">
                  <sapn>Awards: </sapn>
                  <span>{data.Awards}</span>
                </div>
                <div>
                  Click Here :{" "}
                  <a className="online" href="https://myflixer.center/">
                    Watch Online
                  </a>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img className="border border-5" src={data.Poster} alt={data.Title} />
            </div>
          </>
        )}
    </div>
  );
};

export default MovieDetails;
