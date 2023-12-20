import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {logoutAction} from '../../store/api-actions.ts';
import React from 'react';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {Link} from 'react-router-dom';
import {getAuthorisationStatus, getAvatar} from '../../store/user-reducer/selectors.ts';

export function UserBlock() {
  const authorizationStatus = useAppSelector(getAuthorisationStatus);
  const avatar = useAppSelector(getAvatar);
  const dispatch = useAppDispatch();

  const signOutClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to="/login" className="user-block__link">Sign in</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img
              src={avatar || ''}
              alt="User avatar"
            />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={signOutClickHandler}>Sign out</a>
      </li>
    </ul>
  );
}
