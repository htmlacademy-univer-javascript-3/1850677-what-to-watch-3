import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Genre} from '../const';
import {
  changeGenre, getFilm,
  getFilms, getRelatedFilms, getReviews,
  requireAuthorization,
  setDataLoadingStatus,
  setFilmCardCount
} from './actions';
import {InitialState} from '../types.ts';

const initialStateProps: InitialState = {
  genre: Genre.All,
  film: null,
  filmList: [],
  reviewList: [],
  relatedFilms: [],
  sortedFilmList: [],
  filmCardCount: 8,
  dataIsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userData: null,
};

const reducer = createReducer(initialStateProps, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.sortedFilmList = (state.genre === Genre.All) ? state.filmList : state.filmList.filter((film) => film.genre === state.genre);
      state.filmCardCount = Math.min(state.sortedFilmList.length, 8);
    })

    .addCase(setFilmCardCount, (state) => {
      const filmsByGenre = state.sortedFilmList.length;
      state.filmCardCount = (state.filmCardCount + 8 > filmsByGenre) ? filmsByGenre : state.filmCardCount + 8;
    })

    .addCase(getFilms, (state, action) => {
      state.filmList = action.payload;
      state.sortedFilmList = action.payload;
      state.filmCardCount = Math.min(state.filmList.length, 8);
    })

    .addCase(setDataLoadingStatus, (state, action) => {
      state.dataIsLoading = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(getFilm, (state, action) => {
      state.film = action.payload;
    })

    .addCase(getRelatedFilms, (state, action) => {
      state.relatedFilms = action.payload;
    })

    .addCase(getReviews, (state, action)=>{
      state.reviewList = action.payload;
    });
});

export {reducer};
