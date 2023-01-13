import {
    CREATE_RESERVATION_FAIL,
    CREATE_RESERVATION_REQUEST,
    CREATE_RESERVATION_SUCCESS
} from '../constants/reservationConstants'

export const newReservationReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_RESERVATION_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case CREATE_RESERVATION_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }
        case CREATE_RESERVATION_FAIL:
            return{
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}