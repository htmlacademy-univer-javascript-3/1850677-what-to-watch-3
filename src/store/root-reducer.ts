import {combineReducers} from '@reduxjs/toolkit';
import {Reducer} from '../const';
import {filmReducer} from './film-reducer/film-reducer.ts';
import {userReducer} from './user-reducer/user-reducer.ts';
import {mainReducer} from './main-reducer/main-reducer.ts';

const rootReducer = combineReducers({
  [Reducer.Film]: filmReducer.reducer,
  [Reducer.Main]: mainReducer.reducer,
  [Reducer.User]: userReducer.reducer,
});

export {rootReducer};
