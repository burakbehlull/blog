import { useState } from "react"


export default function Login(){
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        setForm({...values, [e.target.name]: e.target.value})
    }
    const handleClick = ()=> {

    }
    return(
        <>
            <input type="text" value={values.username} name="username" placeholder="Username is Here" onChange={handleChange}/>
            <input type="password" value={values.password} name="password" placeholder="Password is Here" onChange={handleChange} />
            <button onClick={handleClick}>Giriş Yap</button>
        </>
    )
}