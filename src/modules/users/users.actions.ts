import {EUsers} from "./users.constants";

export interface IActiveUser {
  title: string;
  sessionTime: string;
  location: string;
}

export const setActiveUser = (payload: IActiveUser) => ({
  type: EUsers.SET_ACTIVE_USER,
  payload,
} as const);
