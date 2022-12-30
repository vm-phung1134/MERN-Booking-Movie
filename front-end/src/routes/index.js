import Login from '../pages/public/login'
import HomePage from '../pages/public/homepage'

const publicRoutes = [
    {
        path: '/home', component: HomePage
    },
    {
        path: '/', component: Login
    },
]

const privateRoutes = [
    
]

export {publicRoutes, privateRoutes}