import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (userChange) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: userChange,
});

export const checkUserSession = () => ({
  type: USER_ACTION_TYPES.CHECK_USER_SESSION,
});

export const googleSignInStart = () => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN,
});

export const EmailSignInStart = (email, password) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (userAuth) => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: userAuth,
});

export const signInFailed = (error) => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAILED,
  payload: error,
});
