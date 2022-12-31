import Login from '../pages/public/login'
import HomePage from '../pages/public/homepage'

const publicRoutes = [
    {
        path: '/home', component: HomePage
    },
    
]

const privateRoutes = [
   {
        path: '/', component: Login
    }, 
]

export {publicRoutes, privateRoutes}