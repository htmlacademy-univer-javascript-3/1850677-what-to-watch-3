import {FilmState} from '../../types.ts';
import {filmReducer} from './film-reducer.ts';
import {
  changeFavoriteStatusAction,
  fetchFilmByIDAction,
  fetchReviewsByIDAction,
  fetchSimilarFilmsByIDAction
} from '../api-actions.ts';
import {makeFakeFilmsList, makeFakeFilm, makeFakeReviews} from '../../utils/mocks.ts';


describe('FilmReducer Slice', () => {
  let initialState: FilmState;

  beforeEach(() => {
    initialState = {
      film: null,
      reviews: [],
      similarFilms: [],
      dataIsLoading: false,
    };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const result = filmReducer.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should update "film" and "dataIsLoading" to false with "fetchFilmByIDAction.fulfilled"', () => {
    const expectedIsFilmLoading = false;
    initialState.dataIsLoading = true;
    const testFilm = makeFakeFilm();

    const result = filmReducer.reducer(initialState, {
      type: fetchFilmByIDAction.fulfilled,
      payload: testFilm,
    });

    expect(result.dataIsLoading).toEqual(expectedIsFilmLoading);
    expect(result.film).toEqual(testFilm);
  });

  it('should update "similarFilms" with "fetchSimilarFilmsByIDAction.fulfilled"', () => {
    const testFilms = makeFakeFilmsList();
    const result = filmReducer.reducer(initialState, {
      type: fetchSimilarFilmsByIDAction.fulfilled,
      payload: testFilms,
    });

    expect(result.similarFilms).toEqual(testFilms);
  });

  it('should update "reviews" with "fetchReviewsByIDAction.fulfilled"', () => {
    const testReviews = makeFakeReviews();
    const result = filmReducer.reducer(initialState, {
      type: fetchReviewsByIDAction.fulfilled,
      payload: testReviews,
    });

    expect(result.reviews).toEqual(testReviews);
  });

  it('should update "isFavorite" with "changeFavoriteStatusAction.fulfilled"', () => {
    const testFilm = makeFakeFilm();
    const testFilm2 = makeFakeFilm();
    testFilm2.isFavorite = true;
    initialState.film = testFilm;

    const result = filmReducer.reducer(initialState, {
      type: changeFavoriteStatusAction.fulfilled,
      payload: testFilm2,
    });

    expect(result.film?.isFavorite).toEqual(true);
  });
});
