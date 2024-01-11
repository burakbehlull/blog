import React, {useState} from "react"
import axios from 'axios'

export default function CreatePost(){
    const [values, setValues] = useState({
        title: '',
        description: ''
    })
    const [data, setData] = useState('')
    
    const submitHandle = (e)=> {
        e.preventDefault()
        axios.post('http://localhost/api/createPost', {
            title: values.title,
            description: values.description
        }).then((res)=> {
            setData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    const handleChange = (e)=> {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return(
        <>
            {JSON.stringify(data)}
            <form onSubmit={submitHandle} method="POST">
                <input type="text" name="title" value={values.title} onChange={handleChange} />
                <input type="text" name="description" value={values.description} onChange={handleChange} />
                <button>Gönder</button>
            </form>
        </>
    )
}