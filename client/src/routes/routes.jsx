import {useRoutes} from 'react-router-dom';
import App from '../App';
import Profile from '../pages/Profile';

// Auth
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

import NotFound from '../pages/NotFound';

import CreatePost from '../components/CreatePost';

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <App />,
        }, 
        {
            path: '/profile/:username',
            element: <Profile />,
        },
        {
            path: '/login',
            element: <Login />
        }, 
        {
            path:'/register',
            element: <Register />
        },
        {
            path: '/createPost',
            element: <CreatePost />
        }, 
        {
            path: '*',
            element: <NotFound />
        }
    ])
    return routes;    
}

export default Routes