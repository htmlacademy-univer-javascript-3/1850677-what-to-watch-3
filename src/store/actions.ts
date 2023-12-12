import { createAction } from '@reduxjs/toolkit';
import {AuthorizationStatus, Genre} from '../const';
import {Film, Review} from '../types.ts';

export const changeGenre = createAction('changeGenre', (genre: Genre) => ({ payload: genre }));
export const getFilmsByGenre = createAction('getFilmsByGenre');
export const getFilms = createAction<Film[]>('getFilms');
export const setFilmCardCount = createAction('setFilmCardCount');
export const setDataLoadingStatus = createAction<boolean>('setDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization ');
export const getFilm = createAction<Film>('getFilm');
export const getRelatedFilms = createAction<Film[]>('getRelatedFilms');
export const getReviews = createAction<Review[]>('getReviews');
