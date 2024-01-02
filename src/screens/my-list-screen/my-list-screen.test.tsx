import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import {makeFakeFilmsList} from '../../utils/mocks.ts';
import {State} from '../../types.ts';
import {AuthorizationStatus} from '../../const.ts';
import {MyListScreen} from './my-list-screen.tsx';

describe('Screen: MyListScreen', () => {
  const fakeFilmsList = makeFakeFilmsList();
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should render correctly', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      MAIN: {
        favoriteFilmList: fakeFilmsList,
        favoriteFilmsCount: fakeFilmsList.length,
      }
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MyListScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
