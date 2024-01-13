import {useRoutes} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <App />,
        }
    ])
    return routes;    
}

export default Routes