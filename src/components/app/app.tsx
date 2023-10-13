import { MainScreen } from '../../screens/main-screen/main-screen';
import type { PromoInfoProps } from '../../screens/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ErrorScreen } from '../../screens/error-screen/error-screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInScreen } from '../../screens/sign-in-screen/sign-in-screen';
import { MyListScreen } from '../../screens/my-list-screen/my-list-screen';
import { MoviePageScreen } from '../../screens/movie-page-screen/movie-page-screen';
import { MoviePageReviewScreen } from '../../screens/movie-page-screen/movie-page-review-screen';
import { PlayerScreen } from '../../screens/player-screen/player-screen';
import { PrivateRoute } from '../private-route/private-route';


export function App(props: PromoInfoProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen {...props} />}
        />

        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen {...props} />}
        />

        <Route
          path={AppRoute.AddReview}
          element={<MoviePageReviewScreen {...props} />}
        />

        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />

        <Route
          path='*'
          element={<ErrorScreen />}
        />
      </Routes>
    </BrowserRouter >
  );
}
