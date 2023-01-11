import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { 
    movieDetailReducer, 
    moviesReducer,
   
} 
from './redux/reducer/movieReducer'
import { userReducer } from './redux/reducer/authReducer'
import {cinemaReducer} from './redux/reducer/cinemaReducer'
import {showTimeReducer} from './redux/reducer/showTimeReducer'
import {
    ticketReducer,
    getOneTicketReducer
} from './redux/reducer/ticketReducer'
import { foodReducer } from './redux/reducer/foodReducer'
const reducer = combineReducers({
    movies: moviesReducer,
    movie: movieDetailReducer,
    user: userReducer,
    cinema: cinemaReducer,
    showtimes: showTimeReducer,
    tickets: ticketReducer,
    foods: foodReducer,
    ticket: getOneTicketReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store