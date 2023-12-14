import { createSlice } from '@reduxjs/toolkit';
import { MainState} from '../../types.ts';
import {changeGenre, setError, setFilmCardCount} from '../actions';
import {fetchFilmsAction, fetchPromoFilmAction} from '../api-actions.ts';
import {Genre, Reducer} from '../../const.ts';

const initialState: MainState = {
  promo: null,
  filmList: [],
  sortedFilmList: [],
  genre: Genre.All,
  filmCardCount: 0,
  dataIsLoading: false,
  error: null
};

export const mainReducer = createSlice({
  name: Reducer.Main,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload;
        state.sortedFilmList = (state.genre === Genre.All) ? state.filmList : state.filmList.filter((film) => film.genre === state.genre);
        state.filmCardCount = Math.min(state.sortedFilmList.length, 8);
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })

      .addCase(setFilmCardCount, (state) => {
        const filmsByGenre = state.sortedFilmList.length;
        state.filmCardCount = (state.filmCardCount + 8 > filmsByGenre) ? filmsByGenre : state.filmCardCount + 8;
      })

      .addCase(fetchFilmsAction.pending, (state) => {
        state.dataIsLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.filmList = action.payload;
        state.sortedFilmList = action.payload;
        state.filmCardCount = Math.min(state.filmList.length, 8);
        state.dataIsLoading = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  },
});
