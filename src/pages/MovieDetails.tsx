import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieError,
} from "../redux/MovieDetailSlice";
import "../Styles/MovieDetail.css";

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`;
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const dispath = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.movie
  );

  const getMovieDetail = async (url: string) => {
    try {
      dispath(fetchMovieStart());
      const res = await axios.get(url);
      console.log(res);
      dispath(fetchMovieSuccess(res.data));
    } catch (error) {
      dispath(fetchMovieError("response error"));
    }
  };

  console.log(data);

  useEffect(() => {
    getMovieDetail(movieDetailUrl);
  }, []);

  console.log(id);

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <img src={`${IMG_PATH}${data?.poster_path}`} alt="" />
        <div className="movie-info">
          <h2 className="movie-title">{data?.title}</h2>
          <p className="movie-overview">{data?.overview}</p>
          <p className="movie-rating">{data?.vote_average}</p>
          <div className="movie-genres">
            {data?.genres.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
          <div className="movie-companies">
            {data?.production_companies.map((item) => (
              <div key={item.id}>
                <img src={`${IMG_PATH}${item?.logo_path}`} alt="" />
                <h5>{item.name}</h5>
              </div>
            ))}
          </div>
          <div className="movie-countries">
            {data?.production_countries.map((item) => (
              <div>
                <p>{item.iso_3166_1}</p>
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
          <div className="movie-languages">
            {data?.spoken_languages.map((item) => (
              <div>
                <p>{item.english_name}</p>
                <p>{item.iso_639_1}</p>
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
          <div>{data?.status}</div>
          <p>{data?.tagline}</p>
          <h3>{data?.vote_count}</h3>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
