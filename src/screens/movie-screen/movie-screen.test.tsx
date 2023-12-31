import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import {makeFakeFilm, makeFakeFilmsList, makeFakeReviews} from '../../utils/mocks.ts';
import {State} from '../../types.ts';
import {AuthorizationStatus} from '../../const.ts';
import {MovieScreen} from './movie-screen.tsx';

describe('Component: MovieScreen', () => {
  const fakeFilm = makeFakeFilm();
  const fakeFilmsList = makeFakeFilmsList();
  const fakeReviews = makeFakeReviews();
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
      FILM: {
        film: fakeFilm,
        reviews: fakeReviews,
        similarFilms: fakeFilmsList,
      },
      MAIN: {
        filmList: fakeFilmsList,
        sortedFilmList: fakeFilmsList,
        promo: fakeFilm,
        favoriteFilmsList: fakeFilmsList,
        favoriteFilmsCount: fakeFilmsList.length
      }
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MovieScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/My List/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Review/i)).toBeInTheDocument();
  });

  it('should render correctly if authorization status is NoAuth', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        avatar: null,
      },
      FILM: {
        film: fakeFilm,
        reviews: fakeReviews,
        similarFilms: fakeFilmsList,
      },
      MAIN: {
        filmList: fakeFilmsList,
        sortedFilmList: fakeFilmsList,
        promo: fakeFilm,
        favoriteFilmsList: fakeFilmsList,
        favoriteFilmsCount: fakeFilmsList.length
      }
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MovieScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.queryByText(/Add Review/i)).not.toBeInTheDocument();
  });
});
