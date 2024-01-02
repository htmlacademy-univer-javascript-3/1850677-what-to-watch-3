import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import {makeFakeFilm, makeFakeFilmsList} from '../../utils/mocks.ts';
import {State} from '../../types.ts';
import {AuthorizationStatus} from '../../const.ts';
import {MainScreen} from './main-screen.tsx';

describe('Screen: MainScreen', () => {
  const fakeFilm = makeFakeFilm();
  const fakeFilmsList = makeFakeFilmsList();
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should render correctly if authorization status is Auth', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        avatar: null,
      },
      MAIN: {
        filmList: fakeFilmsList,
        sortedFilmList: fakeFilmsList,
        promo: fakeFilm,
        favoriteFilmList: fakeFilmsList,
        favoriteFilmsCount: fakeFilmsList.length
      }
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render correctly if authorization status is NoAuth', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        avatar: null,
      },
      MAIN: {
        filmList: fakeFilmsList,
        sortedFilmList: fakeFilmsList,
        promo: fakeFilm,
        favoriteFilmList: fakeFilmsList,
        favoriteFilmsCount: fakeFilmsList.length
      }
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
