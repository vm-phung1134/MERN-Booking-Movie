import axios from "axios"
import { 
    GET_ALL_BLOG_FAIL, 
    GET_ALL_BLOG_REQUIRED, 
    GET_ALL_BLOG_SUCCESS, 
    GET_ONE_BLOG_FAIL, 
    GET_ONE_BLOG_REQUIRED, 
    GET_ONE_BLOG_SUCCESS 
} from "../constants/blogConstants"

export const getAllBlog = () => async (dispatch) => {
    try{
        dispatch({type: GET_ALL_BLOG_REQUIRED})
        const {data} = await axios.get(`http://localhost:5000/api/v1/blogs`)
        dispatch({
            type: GET_ALL_BLOG_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_ALL_BLOG_FAIL,
            payload: error
        })
    }
}
export const getOneBlog = (id) => async (dispatch) => {
    try{
        dispatch({type: GET_ONE_BLOG_REQUIRED})
        const {data} = await axios.get(`http://localhost:5000/api/v1/blogs/${id}`)
        dispatch({
            type: GET_ONE_BLOG_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_ONE_BLOG_FAIL,
            payload: error
        })
    }
}