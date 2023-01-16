import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import ApiKey from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk
  ('movies/fetchAsyncMovies', async () => {
    const MovieText = "fast";
    const response = await MovieApi
      .get(`?apikey=${ApiKey}&s=${MovieText}&type=movie`)
    return response.data;
  });

export const fetchAsyncShows = createAsyncThunk
  ('movies/fetchAsyncShows', async () => {
    const ShowText = "money";
    const response = await MovieApi
      .get(`?apikey=${ApiKey}&s=${ShowText}&type=series`)
    return response.data;
  });

export const fetchAsyncMovieorShowDetails = createAsyncThunk
  ('movies/fetchAsyncMovieorShowDetails',
    async (id) => {
      const response = await MovieApi
        .get(`?apikey=${ApiKey}&i=${id}&Plot=full`)
      return response.data;
    })

const initialState = {
  movies: {},
  shows: {},
  selectedMovieorShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedmovieorshow: (state) => {
      state.selectedMovieorShow = {};
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieorShowDetails.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, selectedMovieorShow: payload };
    }
  }
});

export const { removeSelectedmovieorshow } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllshows = (state) => state.movies.shows;
export const getallMoviesandShows = (state) => state.movies.selectedMovieorShow;
export default movieSlice.reducer;

