import {
    ALL_MOVIE_REQUEST, 
    ALL_MOVIE_SUCCESS,
    ALL_MOVIE_FAIL,
    ONE_MOVIE_FAIL,
    ONE_MOVIE_REQUEST,
    ONE_MOVIE_SUCCESS,
} from '../constants/movieConstants'

//REDUCER GET ALL MOVIES
export const moviesReducer = 
    (
        state = {
            movies: []
        } , 
        action
    ) => {
        switch(action.type){
        case ALL_MOVIE_REQUEST:
            return {
                loading: true,
                movies: []
            }
        case ALL_MOVIE_SUCCESS:
            return {
                loading: false,
                movies: action.payload.movies,
                moviesCount: action.payload.productsCount
            }
        case ALL_MOVIE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }

// REDUCER GET ONE MOVIE

export const movieDetailReducer = 
    (
        state = {
            movie: {}
        } , 
        action
    ) => {
        switch(action.type){
        case ONE_MOVIE_REQUEST:
            return {
                loading: true,
                movie: {}
            }
        case ONE_MOVIE_SUCCESS:
            return {
                loading: false,
                movie: action.payload,
            }
        case ONE_MOVIE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }



