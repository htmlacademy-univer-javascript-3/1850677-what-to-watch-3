import { store } from './store';
import {AuthorizationStatus, Genre} from './const.ts';

export type Film = {
  id: number;
  name: string;
  genre: Genre;
  releaseYear: number;
  previewImage: string;
  description: string;
  rating: number;
  ratingLevel: string;
  director: string;
  starring: string[];
  ratingCount: number;
  duration: string;
  previewVideoLink: string;
}

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
}

export type AuthData = {
  email: string;
  password: string;
};

export type InitialState = {
  genre: Genre;
  filmList: Film[];
  sortedFilmList: Film[];
  filmCardCount: number;
  dataIsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userData: UserData | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
