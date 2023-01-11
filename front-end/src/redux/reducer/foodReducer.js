import {
    ALL_FOOD_REQUEST, 
    ALL_FOOD_SUCCESS,
    ALL_FOOD_FAIL,
} from '../constants/foodConstants'

//REDUCER GET ALL FOODS
export const foodReducer = 
    (
        state = {
            foods: []
        } , 
        action
    ) => {
        switch(action.type){
        case ALL_FOOD_REQUEST:
            return {
                loading: true,
                foods: []
            }
        case ALL_FOOD_SUCCESS:
            return {
                loading: false,
                foods: action.payload,
            }
        case ALL_FOOD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }
