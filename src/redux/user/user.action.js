import { UserActionTypes } from "./user.types";

export const SetCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
