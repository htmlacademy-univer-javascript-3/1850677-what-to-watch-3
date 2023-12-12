import { createAction } from '@reduxjs/toolkit';
import {AuthorizationStatus, Genre} from '../const';
import {Film} from '../types.ts';

export const changeGenre = createAction('changeGenre', (genre: Genre) => ({ payload: genre }));
export const getFilmsByGenre = createAction('getFilmsByGenre');
export const getFilms = createAction<Film[]>('getFilms');
export const setFilmCardCount = createAction('setFilmCardCount');
export const setDataLoadingStatus = createAction<boolean>('setDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization ');
