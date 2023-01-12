import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { 
    movieDetailReducer, 
    moviesReducer,
   
} 
from './redux/reducer/movieReducer'
import { userReducer } from './redux/reducer/authReducer'
import {
    cinemaReducer,
    cinemaDetailReducer
} from './redux/reducer/cinemaReducer'
import {
    showTimeReducer,
    showtimeDetailReducer
} from './redux/reducer/showTimeReducer'
import {
    ticketReducer
} from './redux/reducer/ticketReducer'
import { foodReducer } from './redux/reducer/foodReducer'
const reducer = combineReducers({
    movies: moviesReducer,
    movie: movieDetailReducer,
    user: userReducer,
    cinemas: cinemaReducer,
    showtimes: showTimeReducer,
    tickets: ticketReducer,
    foods: foodReducer,
    cinema: cinemaDetailReducer,
    showtime: showtimeDetailReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store