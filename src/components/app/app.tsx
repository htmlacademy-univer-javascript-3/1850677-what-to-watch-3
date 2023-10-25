import { MainScreen, MainScreenProps } from '../../screens/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ErrorScreen } from '../../screens/error-screen/error-screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInScreen } from '../../screens/sign-in-screen/sign-in-screen';
import { MyListScreen } from '../../screens/my-list-screen/my-list-screen';
import { MovieScreen } from '../../screens/movie-page-screen/movie-screen';
import { PlayerScreen } from '../../screens/player-screen/player-screen';
import { PrivateRoute } from '../private-route/private-route';
import { AddReviewScreen } from '../../screens/add-review-screen/add-review-screen';

type AppProps = MainScreenProps;

export function App(props: AppProps) {
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
              <MyListScreen film={props.promoFilm} films={props.films}/>
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Film}
          element={<MovieScreen films={props.films} />}
        />

        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen films={props.films} />}
        />

        <Route
          path={AppRoute.Player}
          element={<PlayerScreen videoUrl={props.promoFilm.videoUrl}/>}
        />

        <Route
          path='*'
          element={<ErrorScreen />}
        />
      </Routes>
    </BrowserRouter >
  );
}
