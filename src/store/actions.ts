import { createAction } from '@reduxjs/toolkit';
import {Genre} from '../const';

export const changeGenre = createAction('changeGenre', (genre: Genre) => ({ payload: genre }));
export const getFilmsByGenre = createAction('getFilmsByGenre');
export const setFilmCardCount = createAction('setFilmCardCount');
export const setFavoriteCount = createAction<number>('setFavoriteCount');
export const setError = createAction<string | null>('setError');
