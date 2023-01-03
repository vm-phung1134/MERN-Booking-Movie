import Login from '../pages/public/login'
import HomePage from '../pages/public/homepage'
import HomeMovie from '../pages/public/movie/homeMovie'
import DetailMovie from '../pages/public/movie/detailMovie'

const publicRoutes = [
    {
        path: '/home', component: HomePage
    },
    {
        path: '/movies', component: HomeMovie
    },
    {
        path: `/movies/:id`, 
        component: DetailMovie
    },
    
]

const privateRoutes = [
   {
        path: '/', component: Login
    }, 
]

export {publicRoutes, privateRoutes}