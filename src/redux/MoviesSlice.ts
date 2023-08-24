import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.loading = false;
      state.movies = action.payload;
    },
    getMoviesError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getMoviesStart, getMoviesSuccess, getMoviesError } =
  moviesSlice.actions;
export default moviesSlice.reducer;
