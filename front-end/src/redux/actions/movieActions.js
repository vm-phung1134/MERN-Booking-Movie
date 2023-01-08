import axios from 'axios'

import {
    ALL_MOVIE_FAIL,
    ALL_MOVIE_REQUEST,
    ALL_MOVIE_SUCCESS,
    ONE_MOVIE_FAIL,
    ONE_MOVIE_SUCCESS,
    ONE_MOVIE_REQUEST,
} from '../constants/movieConstants'

export const getAllMovie = () => async (dispatch) => {
    try{
        dispatch({type: ALL_MOVIE_REQUEST})
        const {data} = await axios.get(`http://localhost:5000/api/v1/movies`)
        dispatch({
            type: ALL_MOVIE_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_MOVIE_FAIL,
            payload: error
        })
    }
}

export const getOneMovie = (id) => async (dispatch) => {
    try{
        
        dispatch({type: ONE_MOVIE_REQUEST})
        const {data} = await axios.get(`http://localhost:5000/api/v1/movies/${id}`)
        dispatch({
            type: ONE_MOVIE_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ONE_MOVIE_FAIL,
            payload: error
        })
    }
}
