import {
  AppThunkDispatch,
  extractActionsTypes,
  makeFakeFilmsList,
  makeFakeFilm,
  makeFakeReviews
} from '../utils/mocks.ts';
import {Action} from '@reduxjs/toolkit';
import {AuthData, State} from '../types.ts';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api.ts';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import {APIRoute} from '../const.ts';
import {
  changeFavoriteStatusAction,
  checkAuthAction, fetchFavoriteFilmsAction,
  fetchFilmByIDAction,
  fetchFilmsAction,
  fetchPromoFilmAction, fetchReviewsByIDAction, fetchSimilarFilmsByIDAction,
  loginAction,
  logoutAction
} from './api-actions.ts';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, []);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('fetchPromoFilmAction', () => {
    it('should dispatch "fetchPromoFilmAction.pending", "fetchPromoFilmAction.fulfilled", when server response 200', async () => {
      const testFilm = makeFakeFilm();
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(200, testFilm);

      await store.dispatch(fetchPromoFilmAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchPromoFilmAction.pending.type,
        fetchPromoFilmAction.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchPromoFilmAction.pending", "fetchPromoFilmAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(400);

      await store.dispatch(fetchPromoFilmAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchPromoFilmAction.pending.type,
        fetchPromoFilmAction.rejected.type,
      ]);
    });
  });

  describe('fetchFilmsAction', () => {
    it('should dispatch "fetchFilmsAction.pending", "fetchFilmsAction.fulfilled", when server response 200', async () => {
      const testFilms = makeFakeFilmsList();
      mockAxiosAdapter.onGet(APIRoute.Films).reply(200, testFilms);

      await store.dispatch(fetchFilmsAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFilmsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFilmsAction.pending.type,
        fetchFilmsAction.fulfilled.type,
      ]);

      expect(fetchFilmsFulfilled.payload)
        .toEqual(testFilms);
    });

    it('should dispatch "fetchFilmsAction.pending", "fetchFilmsAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Films).reply(400, []);

      await store.dispatch(fetchFilmsAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilmsAction.pending.type,
        fetchFilmsAction.rejected.type,
      ]);
    });
  });

  describe('fetchFilmByIDAction', () => {
    it('should dispatch "fetchFilmByIDAction.pending", "fetchFilmByIDAction.fulfilled", when server response 200', async () => {
      const testFilms = makeFakeFilmsList();
      mockAxiosAdapter.onGet('/films/1').reply(200, testFilms);

      await store.dispatch(fetchFilmByIDAction('1'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchFilmByIDAction.pending.type,
        fetchFilmByIDAction.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchFilmByIDAction.pending", "fetchFilmByIDAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/films/1').reply(400, []);

      await store.dispatch(fetchFilmByIDAction('1'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilmByIDAction.pending.type,
        fetchFilmByIDAction.rejected.type,
      ]);
    });
  });

  describe('fetchSimilarFilmsByIDAction', () => {
    it('should dispatch "fetchSimilarFilmsByIDAction.pending", "fetchSimilarFilmsByIDAction.fulfilled", when server response 200', async () => {
      const testFilms = makeFakeFilmsList();
      mockAxiosAdapter.onGet('/films/1/similar').reply(200, testFilms);

      await store.dispatch(fetchSimilarFilmsByIDAction('1'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchSimilarFilmsByIDAction.pending.type,
        fetchSimilarFilmsByIDAction.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchSimilarFilmsByIDAction.pending", "fetchSimilarFilmsByIDAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/films/1/similar').reply(400, []);

      await store.dispatch(fetchSimilarFilmsByIDAction('1'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSimilarFilmsByIDAction.pending.type,
        fetchSimilarFilmsByIDAction.rejected.type,
      ]);
    });
  });

  describe('fetchReviewsByIDAction', () => {
    it('should dispatch "fetchReviewsByIDAction.pending", "fetchReviewsByIDAction.fulfilled", when server response 200', async () => {
      const testReviews = makeFakeReviews();
      mockAxiosAdapter.onGet('/comments/1').reply(200, testReviews);

      await store.dispatch(fetchReviewsByIDAction('1'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchReviewsByIDAction.pending.type,
        fetchReviewsByIDAction.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchReviewsByIDAction.pending", "fetchReviewsByIDAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/comments/1').reply(400, []);

      await store.dispatch(fetchReviewsByIDAction('1'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsByIDAction.pending.type,
        fetchReviewsByIDAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteFilmsAction', () => {
    it('should dispatch "fetchFavoriteFilmsAction.pending", "fetchFavoriteFilmsAction.fulfilled", when server response 200', async () => {
      const testFilms = makeFakeFilmsList();
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, testFilms);

      await store.dispatch(fetchFavoriteFilmsAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteFilmsAction.pending.type,
        fetchFavoriteFilmsAction.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchFavoriteFilmsAction.pending", "fetchFavoriteFilmsAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);

      await store.dispatch(fetchFavoriteFilmsAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteFilmsAction.pending.type,
        fetchFavoriteFilmsAction.rejected.type,
      ]);
    });
  });

  describe('changeFavoriteStatusAction', () => {
    it('should dispatch "changeFavoriteStatusAction.pending", "changeFavoriteStatusAction.fulfilled", when server response 200', async () => {
      const postData = {
        filmId: '1',
        status: true
      };
      mockAxiosAdapter.onPost('/favorite/1/1').reply(200);

      await store.dispatch(changeFavoriteStatusAction(postData));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        changeFavoriteStatusAction.pending.type,
        changeFavoriteStatusAction.fulfilled.type,
      ]);
    });

    it('should dispatch "changeFavoriteStatusAction.pending", "changeFavoriteStatusAction.fulfilled", when server response 200', async () => {
      const postData = {
        filmId: '1',
        status: true
      };
      mockAxiosAdapter.onPost('/favorite/1/1').reply(400);

      await store.dispatch(changeFavoriteStatusAction(postData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        changeFavoriteStatusAction.pending.type,
        changeFavoriteStatusAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async () => {
      const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type,
      ]);
    });

  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });
  });
});
