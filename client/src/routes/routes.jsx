import {useRoutes} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/auth/Login';
import NotFound from '../pages/NotFound';

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
            path: '*',
            element: <NotFound />
        }
    ])
    return routes;    
}

export default Routes