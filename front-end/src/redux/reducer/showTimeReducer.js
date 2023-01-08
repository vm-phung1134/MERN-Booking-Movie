import {
    ALL_SHOWTIME_REQUEST, 
    ALL_SHOWTIME_SUCCESS,
    ALL_SHOWTIME_FAIL,
} from '../constants/showTimeConstants'

//REDUCER GET ALL SHOWTIMES
export const showTimeReducer = 
    (
        state = {
            showtimes: []
        } , 
        action
    ) => {
        switch(action.type){
        case ALL_SHOWTIME_REQUEST:
            return {
                loading: true,
                showtimes: []
            }
        case ALL_SHOWTIME_SUCCESS:
            return {
                loading: false,
                showtimes: action.payload,
            }
        case ALL_SHOWTIME_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }
