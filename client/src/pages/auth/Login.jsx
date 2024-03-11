import React, {useState} from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'

function Login() {
    const [usernameCookies, setUsernameCookie, removeUsernameCookie] = useCookies(['username'])
    const [accesstokenCookies, setAccesstokenCookie, removeAccesstokenCookie] = useCookies(['username'])
    
    const [form, setForm] = useState({email: '', password: ''})
    const [data, setData] = useState({})
    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleChange = (e) => {
        e.preventDefault()
        axios.post('http://localhost/auth/login', {
            email: form.email,
            password: form.password
        }).then(res=>setData(res.data)).catch(err=> console.log(err))
        console.log(data)
        if(data.username && data.accessToken){
            setUsernameCookie('username', data.username, {path: '/'})
            setAccesstokenCookie('accessToken', data.accessToken, {path: '/'})
        }
    }
    return(
        <>
            <form>
                <input type='email' name='email' value={form.email} onChange={onChange} />
                <input type='password' name='password' value={form.password} onChange={onChange} />
                <button type='submit' onClick={handleChange}>Giriş Yap</button>
            </form>
        </>
    )
}

export default Login
