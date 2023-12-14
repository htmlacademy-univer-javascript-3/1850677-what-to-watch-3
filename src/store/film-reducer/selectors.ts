import {State} from '../../types.ts';
import {Reducer} from '../../const.ts';

export const getFilm = (state: State) => state[Reducer.Film].film;
export const getReviews = (state: State) => state[Reducer.Film].reviews;
export const getSimilarFilms = (state: State) => state[Reducer.Film].similarFilms;
export const getLoadingState = (state: State) => state[Reducer.Film].dataIsLoading;
