import { createSlice } from '@reduxjs/toolkit';
import { UserState} from '../../types.ts';
import { dropToken, saveToken } from '../../services/token';
import { checkAuthAction, loginAction, logoutAction, } from '../api-actions';
import {AuthorizationStatus, Reducer} from '../../const.ts';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  avatar: null,
};

export const userReducer = createSlice({
  name: Reducer.User,
  initialState,
  reducers: {},
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
