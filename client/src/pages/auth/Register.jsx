import {useState} from "react"
import axios from "axios"

export default function Register(){
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
    }
    return(
        <>
            {data?.success && data?.message}
            <input type="text" name="username" onChange={onChange} />
            <input type="email" name="email" onChange={onChange} />
            <input type="text" name="displayName" onChange={onChange} />
            <input type="password" name="password" onChange={onChange} />
            <button type="submit" onClick={handleChange}>Kayıt ol</button>
        </>
    )
}