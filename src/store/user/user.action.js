import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (userChange) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: userChange,
});
