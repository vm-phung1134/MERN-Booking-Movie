import { 
    GET_ALL_BLOG_FAIL, 
    GET_ALL_BLOG_REQUIRED, 
    GET_ALL_BLOG_SUCCESS, 
    GET_ONE_BLOG_FAIL, 
    GET_ONE_BLOG_REQUIRED, 
    GET_ONE_BLOG_SUCCESS 
} 
from '../constants/blogConstants'

//REDUCER GET ALL CINEMAS
export const blogReducer = 
    (
        state = {
            blogs: []
        } , 
        action
    ) => {
        switch(action.type){
        case GET_ALL_BLOG_REQUIRED:
            return {
                loading: true,
                blogs: []
            }
        case GET_ALL_BLOG_SUCCESS:
            return {
                loading: false,
                blogs: action.payload.blogs,
            }
        case GET_ALL_BLOG_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }

    export const blogDetailReducer = 
    (
        state = {
            blog: {}
        } , 
        action
    ) => {
        switch(action.type){
        case GET_ONE_BLOG_REQUIRED:
            return {
                loading: true,
                blog: {}
            }
        case GET_ONE_BLOG_SUCCESS:
            return {
                loading: false,
                blog: action.payload,
            }
        case GET_ONE_BLOG_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        }
        
    }
