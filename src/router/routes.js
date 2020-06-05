import Home from '../views/Home'
import Search from '../views/Home'
import Login from '../views/Home'
import Register from '../views/Home'

export default [
        {
                path:'/',
                component: Home
        },
        {
                path:'/sarch',
                component: Search
        },
        {
                path:'/register',
                component: Register
        },
        {
                path:'/login',
                component: Login
        },
]