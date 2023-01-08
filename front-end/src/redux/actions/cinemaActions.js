import axios from 'axios'

import {
    ALL_CINEMA_FAIL,
    ALL_CINEMA_REQUEST,
    ALL_CINEMA_SUCCESS,
} from '../constants/cinemaConstants'

export const getAllCinema = () => async (dispatch) => {
    try{
        dispatch({type: ALL_CINEMA_REQUEST})
        const {data} = await axios.get(`http://localhost:5000/api/v1/cinemas/detail`)
        dispatch({
            type: ALL_CINEMA_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_CINEMA_FAIL,
            payload: error
        })
    }
}