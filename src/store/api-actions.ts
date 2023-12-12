import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {getFilm, getFilms, getRelatedFilms, getReviews, requireAuthorization, setDataLoadingStatus} from './actions.ts';
import {saveToken, dropToken} from '../services/token.ts';
import {APIRoute, AuthorizationStatus} from '../const.ts';
import {AuthData, Film, Review, UserReview} from '../types.ts';
import {AppDispatch, State, UserData} from '../types.ts';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(getFilms(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchFilmByIDAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilmById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    dispatch(getFilm(data));
  });

export const fetchReviewsByIDAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviewsById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${filmId}`);
    dispatch(getReviews(data));
  });

export const fetchSimilarFilmsByIDAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilarFilmsById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<Film[]>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
    dispatch(getRelatedFilms(data));
  });

export const sendReview = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sendReview',
  async ({ comment, rating, filmId }, { dispatch, extra: api }) => {
    dispatch(setDataLoadingStatus(true));
    await api.post<UserReview>(`${APIRoute.Reviews}/${filmId}`, { comment, rating });
    dispatch(setDataLoadingStatus(false));
  }
);
