import { createSlice } from '@reduxjs/toolkit';

import { FilmState} from '../../types.ts';
import { fetchReviewsByIDAction, fetchFilmByIDAction, fetchSimilarFilmsByIDAction } from '../api-actions.ts';
import {Reducer} from '../../const.ts';

const initialState: FilmState = {
  film: null,
  reviews: [],
  similarFilms: []
};

export const filmReducer = createSlice({
  name: Reducer.Film,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmByIDAction.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchReviewsByIDAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchSimilarFilmsByIDAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      });
  },
});
