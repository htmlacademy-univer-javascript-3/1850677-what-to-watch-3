import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '../const.ts';
import {AuthData, Film, Review, UserReview} from '../types.ts';
import {AppDispatch, State, UserData} from '../types.ts';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<Film[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Film[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavoriteFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film[]>(APIRoute.Favorite);
    return data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
  },
);

export const fetchFilmByIDAction = createAsyncThunk<Film, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilmById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    return data;
  });

export const fetchReviewsByIDAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviewsById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${filmId}`);
    return data;
  });

export const fetchSimilarFilmsByIDAction = createAsyncThunk<Film[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilarFilmsById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<Film[]>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
    return data;
  });

export const sendReviewAction = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sendReview',
  async ({ comment, rating, filmId }, {extra: api }) => {
    await api.post<UserReview>(`${APIRoute.Reviews}/${filmId}`, { comment, rating });
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<Film, { filmId: string; status: boolean }, {
  state: State;
  extra: AxiosInstance;
}>(
  'changeFavoriteStatus',
  async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const urlFavorite = isFavorite ? 1 : 0;
    const { data } = await api.post<Film>(`${APIRoute.Favorite}/${id}/${urlFavorite}`);
    return data;
  }
);

