import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../const';

export const changeGenre = createAction('changeGenre', (genre: Genre) => ({ payload: genre }));
export const getFilmsByGenre = createAction('getFilmsByGenre');
export const setFilmCardCount = createAction('setFilmCardCount');
