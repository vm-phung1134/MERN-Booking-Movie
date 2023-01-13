import axios from 'axios'

import {
    CREATE_RESERVATION_FAIL,
    CREATE_RESERVATION_REQUEST,
    CREATE_RESERVATION_SUCCESS
} from '../constants/reservationConstants'

export const createReservation = (reservation) => async (dispatch) => {
    try {
        dispatch({type: CREATE_RESERVATION_REQUEST})
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
        }
        const {data} = await axios.post(
            'http://localhost:5000/api/v1/reservations/',
            reservation,
            config
        )
        dispatch({
            type: CREATE_RESERVATION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_RESERVATION_FAIL,
            payload: error.response.data.message
        })
    }
}