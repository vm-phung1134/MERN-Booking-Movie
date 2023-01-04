import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_FAIL,
  AUTH_LOGOUT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/authContants";

//REDUCER GET USER
export const userReducer = (
  state = {
    user: {},
  },
  action
) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        userName: action.payload.userName,
      };
    case AUTH_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case AUTH_LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case AUTH_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
