import {Reducer} from '../../const.ts';
import {State} from '../../types.ts';

export const getCurrentGenre = (state: State) => state[Reducer.Main].genre;
export const getFilmList = (state: State) => state[Reducer.Main].filmList;
export const getPromoFilm = (state: State) => state[Reducer.Main].promo;
export const getGenreFilmList = (state: State) => state[Reducer.Main].sortedFilmList;
export const getFilmCardCount = (state: State) => state[Reducer.Main].filmCardCount;
export const getLoadingState = (state: State) => state[Reducer.Main].dataIsLoading;
export const getFavoriteFilmsCount = (state: State) => state[Reducer.Main].favoriteFilmsCount;
export const getFavoriteFilmsList = (state: State) => state[Reducer.Main].favoriteFilmList;

