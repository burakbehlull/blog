import React, {useState} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [usernameCookies, setUsernameCookie, removeUsernameCookie] = useCookies(['username'])
    const [accesstokenCookies, setAccesstokenCookie, removeAccesstokenCookie] = useCookies(['token'])
    
    const [form, setForm] = useState({email: '', password: ''})
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleChange = (e) => {
        e.preventDefault()
        axios.post('http://localhost/auth/login', {
            email: form.email,
            password: form.password,
        }).then(res=>setData(res.data)).catch(err=> setError(err))
        console.log(data)
        if(data.username && data.accessToken){
            setUsernameCookie('username', data.username, {path: '/'})
            setAccesstokenCookie('token', data.accessToken, {path: '/'})
            navigate('/profile')

        }
    }
    return(
        <>
            LOGIN
            {error && error?.message}
            {data.message && data?.message}
            <input type='email' name='email' value={form.email} onChange={onChange} />
            <input type='password' name='password' value={form.password} onChange={onChange} />
            <button type='submit' onClick={handleChange}>Giriş Yap</button>

        </>
    )
}

export default Login
