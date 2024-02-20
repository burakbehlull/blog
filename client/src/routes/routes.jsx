import {useRoutes} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <App />,
        }, {
            path: '/profile/:username',
            element: <Profile />,
        }
    ])
    return routes;    
}

export default Routes