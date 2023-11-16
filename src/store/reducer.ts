import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../const';
import { films } from '../mocks/films';
import { changeGenre, getFilmsByGenre, setFilmCardCount } from './actions';

const initialStateProps = {
  genre: Genre.All,
  filmList: films,
  filmCardCount: 8
};

const reducer = createReducer(initialStateProps, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })

    .addCase(getFilmsByGenre, (state) => {
      switch (state.genre) {
        case Genre.All:
          state.filmList = films;
          break;
        default:
          state.filmList = films.filter((film) => film.genre === state.genre);
          break;
      }
      state.filmCardCount = state.filmList.length;
    })

    .addCase(setFilmCardCount, (state) => {
      const filmsByGenre = state.filmList.length;
      state.filmCardCount = (state.filmCardCount + 8 > filmsByGenre) ? filmsByGenre : state.filmCardCount + 8;
    });
});

export { reducer };
