import {
    ALL_CINEMA_REQUEST, 
    ALL_CINEMA_SUCCESS,
    ALL_CINEMA_FAIL,
} from '../constants/cinemaConstants'

//REDUCER GET ALL CINEMAS
export const cinemaReducer = 
    (
        state = {
            cinemas: []
        } , 
        action
    ) => {
        switch(action.type){
        case ALL_CINEMA_REQUEST:
            return {
                loading: true,
                cinemas: []
            }
        case ALL_CINEMA_SUCCESS:
            return {
                loading: false,
                cinemas: action.payload,
            }
        case ALL_CINEMA_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }
