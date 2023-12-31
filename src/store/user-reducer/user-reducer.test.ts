import {UserState} from '../../types.ts';
import {AuthorizationStatus} from '../../const.ts';
import {userReducer} from './user-reducer.ts';
import {checkAuthAction} from '../api-actions.ts';

describe('UserReducer Slice', () => {
  const user = {
    avatarUrl: 'veryCoolAvatar.png',
  };

  it('should return initial state with empty action', () => {
    const initialState: UserState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      avatar: null,
    };
    const emptyAction = { type: '' };

    const result = userReducer.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const initialState: UserState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      avatar: null,
    };

    const expectedState: UserState = {
      authorizationStatus: AuthorizationStatus.Auth,
      avatar: user.avatarUrl,
    };

    const result = userReducer.reducer(initialState, {
      type: checkAuthAction.fulfilled,
      payload: user,
    });

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
    const initialState: UserState = {
      authorizationStatus: AuthorizationStatus.Auth,
      avatar: null,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      avatar: null,
    };

    const result = userReducer.reducer(initialState, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
