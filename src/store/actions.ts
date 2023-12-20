import { createAction } from '@reduxjs/toolkit';
import {AuthorizationStatus, Genre} from '../const';
import {Film, Review} from '../types.ts';

export const changeGenre = createAction('changeGenre', (genre: Genre) => ({ payload: genre }));
export const getFilmsByGenre = createAction('getFilmsByGenre');
export const getFilms = createAction<Film[]>('getFilms');
export const setFilmCardCount = createAction('setFilmCardCount');
export const setFavoriteCount = createAction<number>('setFavoriteCount');
export const setDataLoadingStatus = createAction<boolean>('setDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization ');
export const getFilm = createAction<Film>('getFilm');
export const getSimilarFilms = createAction<Film[]>('getSimilarFilms');
export const getReviews = createAction<Review[]>('getReviews');
export const setError = createAction<string | null>('setError');
export const getPromo = createAction<Film>('getPromo');
