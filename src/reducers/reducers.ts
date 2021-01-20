import { combineReducers } from 'redux';
import {usersReducers} from "../modules/users/users.reducers";


export const rootReducer = combineReducers({
  usersReducers,
});

export interface IStore extends ReturnType<typeof rootReducer> {}
