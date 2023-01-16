import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movies/Movie';

export const store = configureStore({
    reducer: {
        movies: movieReducer
    },
});