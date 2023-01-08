import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_FAIL,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL,
  CLEAR_ERRORS,
} from "../constants/authConstants";

//REDUCER GET USER
export const userReducer = (
  state = {
    user: {},
  },
  action
) => {
  switch (action.type) {
    // ACTION TYPE LOGIN
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
        errorLogin: action.payload,
      };
    // ACTION TYPE LOGOUT
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
    // ACTION TYPE REGISTER
    case AUTH_REGISTER_REQUEST:
      return {
        loading: true,
        isRegister: false,
      }
    case AUTH_REGISTER_SUCCESS:
      return{
        loading: false,
        user: action.payload,
        isRegister: true,
      }
    case AUTH_REGISTER_FAIL: 
    return {
      loading: false,
      error: action.payload,
    }
    // CLEAR ERRORS
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        errorLogin: null
      };
    default:
      return state;
  }
};
