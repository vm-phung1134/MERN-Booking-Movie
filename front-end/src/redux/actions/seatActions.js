import axios from 'axios'

import {
    ALL_SEAT_FAIL,
    ALL_SEAT_REQUEST,
    ALL_SEAT_SUCCESS,
    ONE_SEAT_FAIL,
    ONE_SEAT_SUCCESS,
    ONE_SEAT_REQUEST,
} from '../constants/seatConstants'

export const getAllSeat = () => async (dispatch) => {
    try{
        dispatch({type: ALL_SEAT_REQUEST})
        const {data} = await axios.get(`http://localhost:5000/api/v1/seats`)
        dispatch({
            type: ALL_SEAT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_SEAT_FAIL,
            payload: error
        })
    }
}

export const getOneSeat = (id) => async (dispatch) => {
    try{
        
        dispatch({type: ONE_SEAT_REQUEST})
        const {data} = await axios.get(`http://localhost:5000/api/v1/seats/${id}`)
        dispatch({
            type: ONE_SEAT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ONE_SEAT_FAIL,
            payload: error
        })
    }
}

// export const updateStatusSeat = (idSeats, idSeat) => async (dispatch) => {
//     try{
        
//         dispatch({type: ONE_SEAT_REQUEST})
//         const {data} = await axios.get(`http://localhost:5000/api/v1/seats/${idSeats}&${idSeat}`)
//         dispatch({
//             type: SELECTING_ITEM ,
//             payload: data._id
//         })
//     }catch(error){
//         dispatch({
//             type: ONE_SEAT_FAIL,
//             payload: error
//         })
//     }
// }
