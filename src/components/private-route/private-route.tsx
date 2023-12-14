import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {useAppSelector} from '../hooks/hooks.ts';
import {getAuthorisationStatus} from '../../store/user-reducer/selectors.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({ children } : PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorisationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}
