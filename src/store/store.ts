import { configureStore } from "@reduxjs/toolkit";
import authSlece from "../redux/authSlece";
import postSlice from "../redux/post";
import MoviesSlice from "../redux/MoviesSlice";
import MovieDetailSlice from "../redux/MovieDetailSlice";

export const store = configureStore({
    reducer: {
        user: authSlece,
        posts: postSlice,
        movies: MoviesSlice,
        movie: MovieDetailSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch