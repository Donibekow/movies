import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Belong {
  backdrop_path: string | null;
  id: number;
  name: string;
  poster_path: string;
}

interface Genres {
  id: number;
  name: string;
}

interface Production {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProCountries {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belong | null;
  budget: number;
  homepage: string;
  id: number;
  genres: Genres[];
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production[];
  production_countries: ProCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: any;
  vote_count: number;
}

interface MovieState {
  loading: boolean;
  error: string | null;
  data: MovieDetail | null;
}

const initialState: MovieState = {
  loading: false,
  error: null,
  data: null,
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMovieStart: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    fetchMovieSuccess: (state, action: PayloadAction<MovieDetail>) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchMovieError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const { fetchMovieStart, fetchMovieSuccess, fetchMovieError } =
  MovieSlice.actions;

export default MovieSlice.reducer;
