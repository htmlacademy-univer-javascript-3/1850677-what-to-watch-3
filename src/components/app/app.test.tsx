import {describe, expect} from 'vitest';
import {createMemoryHistory, MemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {AppRoute, AuthorizationStatus, LoginStatus, Reducer} from '../../const';
import {internet} from 'faker';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {App} from './app.tsx';
import {makeFakeStore} from '../../utils/mocks.ts';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render the "MainScreen" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);
    expect(screen.getByText('All Genres')).toBeInTheDocument();
  });

  it('should render the "MyListScreen" when user navigate to "/mylist"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore({
        [Reducer.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          avatar: internet.url(),
          loginStatus: LoginStatus.Success
        },
      })
    );
    mockHistory.push(AppRoute.MyList);

    render(withStoreComponent);
    expect(screen.getByText('My list')).toBeInTheDocument();
  });

  it('should render the "SignInScreen" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.SignIn);

    render(withStoreComponent);

    expect(screen.getAllByText('Sign in').length).toBe(2);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render the "PlayerScreen" when user navigate to "/player"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(`${AppRoute.Player}`);

    render(withStoreComponent);
    expect(screen.getByText('Exit')).toBeInTheDocument();
  });

  it('should render the "MovieScreen" when user navigate to "/films"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore({
        [Reducer.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          avatar: internet.url(),
          loginStatus: LoginStatus.Success
        },
      })
    );
    mockHistory.push(`${AppRoute.Film}`);

    render(withStoreComponent);

    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getAllByText('My list')[0]).toBeInTheDocument();
  });

  it('should render the "ErrorScreen" when user navigate to unknown route', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push('/unknown');

    render(withStoreComponent);

    expect(screen.getByText('Ошибка')).toBeInTheDocument();
    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
