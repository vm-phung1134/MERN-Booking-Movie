import axios from 'axios'

import {
    ALL_FOOD_REQUEST, 
    ALL_FOOD_SUCCESS,
    ALL_FOOD_FAIL,
} from '../constants/foodConstants'

export const getAllFood = () => async (dispatch) => {
    try{
        dispatch({type: ALL_FOOD_REQUEST})
        const {data} = await axios.get(`http://localhost:5000/api/v1/foods/`)
        dispatch({
            type: ALL_FOOD_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_FOOD_FAIL,
            payload: error
        })
    }
}