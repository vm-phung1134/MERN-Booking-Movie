import axios from 'axios'

import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAIL,
    AUTH_LOGOUT_SUCCESS,
    AUTH_LOGOUT_FAIL,
    AUTH_REGISTER_FAIL,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_REQUEST,
    CLEAR_ERRORS,
} from '../constants/authConstants'

export const authLogin = (email, password) => async (dispatch) => {
    try{
        dispatch({type: AUTH_LOGIN_REQUEST})
        const config = {headers: {"Content-Type": "application/json"}}
        const {data} = await axios.post(
            `http://localhost:5000/api/v1/auth/login`,
            {email,password},
            config
        )
        dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: AUTH_LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const authLogout = () => async (dispatch) => {
    try {
      await axios.get(`http://localhost:5000/api/v1/auth/logout`);
      dispatch({ type: AUTH_LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: AUTH_LOGOUT_FAIL, payload: error.response.data.message });
    }
  };


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

export const authRegister = (name, email, password) => async (dispatch) => {
    try{
        dispatch({type: AUTH_REGISTER_REQUEST})
        const config = {headers: {"Content-Type": "application/json"}}
        const {data} = await axios.post(
            `http://localhost:5000/api/v1/auth/register`,
            {name, email, password},
            config
        )  
        dispatch({
            type: AUTH_REGISTER_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: AUTH_REGISTER_FAIL,
            payload: error.response.data.message
        })
    }
}