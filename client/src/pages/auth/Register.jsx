import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Register(){
    const navigate = useNavigate()

    const [form, setForm] = useState({username: '', displayName: '', email: '', password: ''})
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleChange = (e)=>{
        e.preventDefault()
        axios.post('http://localhost/auth/register', form)
        .then((res)=> setData(res.data))
        .catch((err)=> setError(err.message))
        .finally(()=> {
            navigate('/login')
        })
    }
    return(
        <>
            REGISTER
            {data?.success && data?.message}
            <input type="text" name="username" onChange={onChange} />
            <input type="email" name="email" onChange={onChange} />
            <input type="text" name="displayName" onChange={onChange} />
            <input type="password" name="password" onChange={onChange} />
            <button type="submit" onClick={handleChange}>Kayıt ol</button>
        </>
    )
}