import Login from '../pages/public/login'
import HomePage from '../pages/public/homepage'
import HomeMovie from '../pages/public/movie/homeMovie'
import DetailMovie from '../pages/public/movie/detailMovie'
import Booking from '../pages/public/booking'
import Account from '../pages/public/account'

const publicRoutes = [
    {
        path: '/home', 
        component: HomePage
    },
    {
        path: '/movies', 
        component: HomeMovie
    },
    {
        path: '/movies/:id', 
        component: DetailMovie
    },
    {
        path: '/booking', 
        component: Booking
    },
    {
        path: '/account', 
        component: Account
    },
    
]

const privateRoutes = [
   {
        path: '/', component: Login
    }, 
]

export {publicRoutes, privateRoutes}