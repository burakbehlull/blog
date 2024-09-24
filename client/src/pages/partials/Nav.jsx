import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav>
        
            <Link to="/login" title='Login'>Login</Link>
            <Link to="/register" title='Register'>Register</Link>
        </nav>
    )
}