import {MainScreen} from '../../screens/main-screen/main-screen';
import {AppRoute} from '../../const';
import {ErrorScreen} from '../../screens/error-screen/error-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignInScreen} from '../../screens/sign-in-screen/sign-in-screen';
import {MyListScreen} from '../../screens/my-list-screen/my-list-screen';
import {MovieScreen} from '../../screens/movie-page-screen/movie-screen';
import {PlayerScreen} from '../../screens/player-screen/player-screen';
import {PrivateRoute} from '../private-route/private-route';
import {AddReviewScreen} from '../../screens/add-review-screen/add-review-screen';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from '../hooks/hooks.ts';
import {getLoadingState} from '../../store/main-reducer/selectors.ts';
import {LoadingScreen} from '../../screens/loading-screen/loading-screen.tsx';
import {getAuthorisationStatus} from '../../store/user-reducer/selectors.ts';

export function App() {
  const isFilmsDataLoading = useAppSelector(getLoadingState);
  const authorisationStatus = useAppSelector(getAuthorisationStatus);

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen/>}
          />

          <Route
            path={AppRoute.SignIn}
            element={<SignInScreen/>}
          />

          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authStatus={authorisationStatus}>
                <MyListScreen/>
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Film}
            element={<MovieScreen/>}
          />

          <Route
            path={AppRoute.AddReview}
            element={<AddReviewScreen/>}
          />

          <Route
            path={AppRoute.Player}
            element={<PlayerScreen/>}
          />

          <Route
            path="*"
            element={<ErrorScreen/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

