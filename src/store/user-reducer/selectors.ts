import {State} from '../../types.ts';
import {Reducer} from '../../const.ts';

export const getAvatar = (state: State) => state[Reducer.User].avatar;
export const getAuthorisationStatus = (state: State) => state[Reducer.User].authorizationStatus;
