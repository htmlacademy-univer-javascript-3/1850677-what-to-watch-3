import {Genre} from '../../const.ts';
import {MainState} from '../../types.ts';
import {mainReducer} from './main-reducer.ts';
import {changeFavoriteStatusAction, fetchFilmsAction, fetchPromoFilmAction} from '../api-actions.ts';
import {makeFakeFilmsList, makeFakeFilm} from '../../utils/mocks.ts';
import {setFavoriteCount} from '../actions.ts';

describe('MainReducer Slice', () => {
  let initialState: MainState;

  beforeEach(() => {
    initialState = {
      genre: Genre.All,
      filmList: [],
      sortedFilmList: [],
      filmCardCount: 0,
      dataIsLoading: false,
      favoriteFilmList: [],
      favoriteFilmsCount: 0,
      hasError: false,
      promo: null,
    };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = mainReducer.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should update state with "fetchFilmsAction.fulfilled"', () => {
    const testFilms = makeFakeFilmsList();
    const expectedFilmList = testFilms;
    const expectedDataIsLoading = false;
    initialState.dataIsLoading = true;

    const result = mainReducer.reducer(initialState, {
      type: fetchFilmsAction.fulfilled,
      payload: testFilms,
    });

    expect(result.filmList).toEqual(expectedFilmList);
    expect(result.dataIsLoading).toEqual(expectedDataIsLoading);
  });

  it('should set hasError with "fetchFilmsAction.rejected"', () => {
    const testFilms = makeFakeFilmsList();

    const result = mainReducer.reducer(initialState, {
      type: fetchFilmsAction.rejected,
      payload: testFilms,
    });

    expect(result.hasError).toEqual(true);
  });

  it('should set hasError with "fetchPromoFilmAction.rejected"', () => {
    const testFilms = makeFakeFilmsList();

    const result = mainReducer.reducer(initialState, {
      type: fetchPromoFilmAction.rejected,
      payload: testFilms,
    });

    expect(result.hasError).toEqual(true);
  });

  it('should change "favoriteFilmsCount" with "setFavoriteCount"', () => {
    const expectedFavoriteCount = 3;

    const result = mainReducer.reducer(initialState, {
      type: setFavoriteCount,
      payload: expectedFavoriteCount,
    });

    expect(result.favoriteFilmsCount).toEqual(expectedFavoriteCount);
  });

  it('should change "promo" with "changeFavoriteStatusAction.fulfilled"', () => {
    const testFilm = makeFakeFilm();
    const expectedPromo = testFilm;

    const result = mainReducer.reducer(initialState, {
      type: changeFavoriteStatusAction.fulfilled,
      payload: testFilm,
    });

    expect(result.promo).toEqual(expectedPromo);
  });
});
