import axios from 'axios'

import {
    ALL_SHOWTIME_REQUEST, 
    ALL_SHOWTIME_SUCCESS,
    ALL_SHOWTIME_FAIL,
} from '../constants/showTimeConstants'

export const getAllShowTime = () => async (dispatch) => {
    try{
        dispatch({type: ALL_SHOWTIME_REQUEST})
        const {data} = await axios.get(`http://localhost:5000/api/v1/showtimes/`)
        dispatch({
            type: ALL_SHOWTIME_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_SHOWTIME_FAIL,
            payload: error
        })
    }
}