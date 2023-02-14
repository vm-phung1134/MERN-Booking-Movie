import Login from '../pages/public/login'
import HomePage from '../pages/public/homepage'
import HomeMovie from '../pages/public/movie/homeMovie'
import DetailMovie from '../pages/public/movie/detailMovie'
import Booking from '../pages/public/booking'
import Account from '../pages/public/account'
import CheckoutSuccess from '../pages/public/booking/checkoutSuccess'
import UserTickets from '../pages/public/account/userTickets'
import SearchPage from '../pages/public/search'
import Cinema from '../pages/public/cinema'
import support from '../pages/public/support'
import BlogAndEvent from '../pages/public/blog&event'
import BlogDetail from '../pages/public/blog&event/blogDetail'
import EventDetail from '../pages/public/blog&event/eventDetail'

const publicRoutes = [
    {
        path: '/home', 
        component: HomePage
    },
    {
        path: '/movie', 
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
    {
        path: '/checkout-success',
        component: CheckoutSuccess
    },
    {
        path: '/user-tickets',
        component: UserTickets
    },
    {
        path: '/search',
        component: SearchPage
    },
    {
        path: '/cinema',
        component: Cinema
    },
    {
        path: '/support',
        component: support
    },
    {
        path: '/blog&event',
        component: BlogAndEvent
    },
    {
        path: '/blog-detail/:id',
        component: BlogDetail
    },
    {
        path: '/event-detail/:id',
        component: EventDetail
    }
]

const privateRoutes = [
   {
        path: '/', component: Login
    }, 
]

export {publicRoutes, privateRoutes}