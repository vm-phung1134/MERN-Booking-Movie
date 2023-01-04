import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { 
    movieDetailReducer, 
    moviesReducer,
} 
from './redux/reducer/movieReducer'
import { userReducer } from './redux/reducer/authReducer'

const reducer = combineReducers({
    movies: moviesReducer,
    movie: movieDetailReducer,
    user: userReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store