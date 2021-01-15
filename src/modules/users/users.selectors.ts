import {IStore} from "../../reducers/reducers";

export const selectActiveUser = (state: IStore) => state.usersReducers.activeUser;

export const selectIsActiveUser = (state: IStore) => selectActiveUser(state).title !== '';