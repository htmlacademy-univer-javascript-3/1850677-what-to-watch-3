import {AuthorizationStatus, Genre, LoginStatus, Reducer} from '../const.ts';
import {Film, Review, State} from '../types.ts';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {createAPI} from '../services/api.ts';
import {Action} from 'redux';
import {datatype, date, image, internet, lorem, music, name} from 'faker';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({type}) => type);

const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const makeFakeFilm = (): Film =>
  ({
    id: datatype.uuid(),
    name: name.firstName(),
    posterImage: image.imageUrl(),
    backgroundImage: image.imageUrl(),
    videoLink: image.imageUrl(),
    description: lorem.text(),
    rating: getRandomNumber(0, 10),
    scoresCount: getRandomNumber(0, 10000),
    director: name.lastName(),
    starring: new Array(getRandomNumber(2, 5)).fill(null).map(() => name.lastName()),
    runTime: String(getRandomNumber(70, 180)),
    genre: music.genre() as Genre,
    released: date.recent().getFullYear(),
    isFavorite: datatype.boolean(),
    previewImage: image.imageUrl(),
    previewVideoLink: image.imageUrl(),
  });

export const makeFakeFilmsList = () =>
  new Array(getRandomNumber(9, 12)).fill(null).map(
    () => (makeFakeFilm())
  );

export const makeFakeReviews = () =>
  new Array(getRandomNumber(1, 6)).fill(null).map(
    () =>
      ({
        id: getRandomNumber(0, 10000),
        date: date.recent().toDateString(),
        user: name.firstName(),
        comment: lorem.text(),
        rating: getRandomNumber(0, 10),
        filmId: getRandomNumber(0, 10000),
      } as Review)
  );

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  [Reducer.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    avatar: internet.url(),
    loginStatus: LoginStatus.Success
  },
  [Reducer.Main]: {
    filmList: makeFakeFilmsList(),
    promo: makeFakeFilm(),
    genre: Genre.All,
    hasError: false,
    dataIsLoading: false,
    sortedFilmList: makeFakeFilmsList(),
    favoriteFilmsCount: getRandomNumber(1, 9),
    favoriteFilmList: makeFakeFilmsList(),
    filmCardCount: 8,
  },
  [Reducer.Film]: {
    similarFilms: makeFakeFilmsList(),
    reviews: makeFakeReviews(),
    film: makeFakeFilm(),
    dataIsLoading: false
  },
  ...(initialState ?? {}),
});
