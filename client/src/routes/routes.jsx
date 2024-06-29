import {useRoutes} from 'react-router-dom';

import App from '../App';
import NotFound from '@pages/NotFound';
import { ProfileFinder } from '@profile';
import { Login, Register } from '@auth';

import { CreatePost } from '@components';

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <App />,
        }, 
        {
            path: '/profile/:username',
            element: <ProfileFinder />,
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