import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../../types.ts';
import {dropToken, saveToken} from '../../services/token';
import {checkAuthAction, loginAction, logoutAction,} from '../api-actions';
import {AuthorizationStatus, LoginStatus, Reducer} from '../../const.ts';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  avatar: null,
  loginStatus: LoginStatus.Success
};

export const userReducer = createSlice({
  name: Reducer.User,
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<LoginStatus>) => {
      state.loginStatus = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutAction.fulfilled, (state) => {
        dropToken();
        state.avatar = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const {setLoginStatus} = userReducer.actions;

