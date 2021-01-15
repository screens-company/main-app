import {combineReducers} from "redux";
import {EUsers} from "./users.constants";
import {IActiveUser} from "./users.actions";
import {TActionType} from "../../types/redux";

type TAction = TActionType<typeof import('./users.actions')>;

export const DEFAULT_USER = {
  title: '',
  sessionTime: '',
  location: '',
};

export const activeUser = (state: IActiveUser = DEFAULT_USER, action: TAction) => {
  switch (action.type) {
    case EUsers.SET_ACTIVE_USER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const usersReducers = combineReducers({
  activeUser,
});
